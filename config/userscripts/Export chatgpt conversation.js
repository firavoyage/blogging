// ==UserScript==
// @name         Export chatgpt conversation
// @namespace    http://tampermonkey.net/
// @version      1.12
// @description  Copy ChatGPT conversations reliably, normalize math, gently normalize headings, and prepend the current URL as a comment in the final copied result. Manual copies and the script's per-turn output are left untouched.
// @match        https://chatgpt.com/*
// ==/UserScript==

(function () {
  "use strict";

  const TAG = "[TM-COPY]";
  const log = (...args) => console.debug(TAG, ...args);
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  /* -------------------------
      Helpers: DOM & scrolling
      ------------------------- */
  const getScrollRoot = () => document.querySelector("[data-scroll-root]");

  const storeScrollPosition = () => {
    const root = getScrollRoot();
    return root ? root.scrollTop : 0;
  };

  const restoreScrollPosition = (scrollTop) => {
    const root = getScrollRoot();
    if (root) root.scrollTop = scrollTop;
  };

  const scrollIntoViewIfNeeded = async (el) => {
    if (!el) return;
    el.scrollIntoView({ block: "center", behavior: "auto" });
    await wait(120);
  };

  /* -------------------------
      Markdown utilities
      ------------------------- */

  const containsCode = (text) => /(```|~~~|<code>|\$[^$]*\$)/.test(text);

  const shiftContentHeaders = (text) => {
    let inFence = false;
    return text
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();

        if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
          inFence = !inFence;
          return line;
        }

        if (inFence && /^\s*#/.test(line)) return line;

        const match = trimmed.match(/^(#{1,6})\s+(.*)/);
        if (!match) return line;
        const [, hashes, content] = match;
        if (/^\d+$/.test(content.trim())) return line;
        return `${"#".repeat(Math.min(hashes.length, 6))} ${content}`;
      })
      .join("\n");
  };

  const normalizeMathMarkdown = (text) => {
    if (containsCode(text)) return text;
    return text
      .replace(
        /\$\$(.*?)\$\$/gs,
        (_, inner) => `$$\n${inner.replace(/={2,}/g, "=").trim()}\n$$`
      )
      .replace(
        /\$([^$\n]+)\$/g,
        (match, inner) => `$${inner.replace(/={2,}/g, "=").trim()}$`
      );
  };

  const hasH1OutsideCode = (text, { ignoreNumericH1 = false } = {}) => {
    if (!text || typeof text !== "string") return false;
    const lines = text.split("\n");
    let inFence = false;
    for (const raw of lines) {
      const line = raw;
      const trimmed = line.trim();
      if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
        inFence = !inFence;
        continue;
      }
      if (inFence) continue;
      if (/^#\s+/.test(line)) {
        if (ignoreNumericH1 && /^#\s*\d+\s*$/.test(line.trim())) {
          continue;
        }
        return true;
      }
    }
    return false;
  };

  const increaseAllHeadingsByOne = (text) => {
    if (!text || typeof text !== "string") return text;
    const lines = text.split("\n");
    let inFence = false;

    const out = lines.map((raw) => {
      const trimmed = raw.trim();

      if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
        inFence = !inFence;
        return raw;
      }

      if (inFence && /^\s*#/.test(raw)) return raw;

      const m = raw.match(/^(#{1,6})\s+(.*)$/);
      if (!m) return raw;
      const hashes = m[1];
      const content = m[2];
      if (hashes.length >= 6) return raw;
      return "#" + hashes + " " + content;
    });

    return out.join("\n");
  };

  const processTextForHeaders = (text, { ignoreNumericH1 = false } = {}) => {
    if (!text || typeof text !== "string") return { changed: false, text };
    if (!text.includes("#")) return { changed: false, text };
    if (!hasH1OutsideCode(text, { ignoreNumericH1 }))
      return { changed: false, text };
    const bumped = increaseAllHeadingsByOne(text);
    return { changed: bumped !== text, text: bumped };
  };

  /* -------------------------
      Clipboard helpers
      ------------------------- */

  const safeReadClipboard = async () => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return null;
    }
  };

  const waitForClipboardChange = async (prev, timeout = 1800) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try {
        const cur = await navigator.clipboard.readText();
        if ((prev === null && cur) || (prev !== null && cur !== prev))
          return cur;
      } catch {}
      await wait(120);
    }
    return null;
  };

  let lastWrittenClipboard = null;

  const writeClipboardDirect = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      lastWrittenClipboard = text;
      return true;
    } catch (err) {
      console.warn(TAG, "clipboard write failed:", err);
      return false;
    }
  };

  const copyViaButton = async (article, btn) => {
    await scrollIntoViewIfNeeded(article);
    const prev = await safeReadClipboard();
    btn.click();
    const copied = await waitForClipboardChange(prev);
    const fallback = article.innerText ? article.innerText.trim() : "";

    if (typeof copied !== "string") {
      return fallback;
    }

    const { changed, text } = processTextForHeaders(copied, {
      ignoreNumericH1: true,
    });
    if (changed) {
      await writeClipboardDirect(text);
      return text;
    }

    return copied;
  };

  const createButton = () => {
    const btn = document.createElement("button");
    btn.id = "tm-copy-btn";
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "60px",
      left: "13px",
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      border: "none",
      background: "white",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      zIndex: 99999,
    });
    btn.title = "Copy conversation";
    return btn;
  };

  const setWorkingState = (isWorking) => {
    const btn = document.querySelector("#tm-copy-btn");
    if (btn) {
      btn.disabled = isWorking;
      btn.style.background = isWorking ? "#374151" : "white";
    }
  };

  const getCurrentUrlComment = () => {
    try {
      const href = location && location.href ? String(location.href) : "";
      const safeHref = href.replace(/-->/g, "--\\>");
      return `<!-- ${safeHref} -->\n\n`;
    } catch (err) {
      return "<!--  -->\n\n";
    }
  };

  const copyConversation = async (retry = true) => {
    log("COPY START");
    setWorkingState(true);

    const originalScrollTop = storeScrollPosition();

    const articles = Array.from(
      document.querySelectorAll(
        'article[data-testid^="conversation-turn-"], article[data-turn]'
      )
    );

    const entries = [];

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const type = article.dataset.turn || "unknown";
      const btn = article.querySelector(
        'button[data-testid="copy-turn-action-button"]'
      );
      const text = btn
        ? (await copyViaButton(article, btn)) || article.innerText.trim()
        : article.innerText.trim();
      entries.push({ type, text });
    }

    let markdown = "";
    let counter = 0;

    const branchElement = document.querySelector(
      ".mx-auto.mt-8.flex.w-full.items-center.justify-center p"
    );
    if (branchElement && branchElement.textContent.includes("Branched from")) {
      counter = 0;
    }

    for (let i = 0; i < entries.length; i++) {
      const { type, text } = entries[i];
      if (type === "user") {
        const prompt = normalizeMathMarkdown(shiftContentHeaders(text));
        const answer = normalizeMathMarkdown(
          shiftContentHeaders(
            entries[i + 1]?.type === "assistant" ? entries[i + 1].text : ""
          )
        );
        markdown += `# ${counter}\n\n${prompt}\n\n---\n\n${answer}\n\n`;
        counter++;
      }
    }

    const finalMarkdown = getCurrentUrlComment() + markdown;

    await writeClipboardDirect(finalMarkdown);

    restoreScrollPosition(originalScrollTop);
    setWorkingState(false);

    if (
      retry &&
      (finalMarkdown.includes("ChatGPT said:") ||
        finalMarkdown.includes("You said:"))
    ) {
      log("Forbidden string detected, retrying once...");
      await copyConversation(false);
    } else {
      log("COPY DONE");
    }
  };

  const init = () => {
    if (document.querySelector("#tm-copy-btn")) return;
    const button = createButton();
    button.addEventListener("click", copyConversation);
    document.body.appendChild(button);
    log("Button added");
  };

  new MutationObserver(init).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  init();
})();
