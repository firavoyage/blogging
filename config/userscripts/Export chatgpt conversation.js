// ==UserScript==
// @name         Export chatgpt conversation
// @namespace    http://tampermonkey.net/
// @version      1.12
// @description  Copy ChatGPT conversations reliably, normalize math, gently normalize headings, and prepend the current URL as a comment in the final copied result. Manual copies and the script's per-turn output are left untouched.
// @match        https://chatgpt.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
  "use strict";

  const TAG = "[TM-COPY]";
  const log = (...args) => console.debug(TAG, ...args);
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  /* -------------------------
     Helpers: DOM & scrolling
     ------------------------- */
  const getScrollRoot = () =>
    document.querySelector('[data-scroll-root]');

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

  // Preserve header levels, avoid numeric-only headers
  // Skip lines inside code blocks that start with optional spaces + #
  const shiftContentHeaders = (text) => {
    let inFence = false; // declare outside the map
    return text
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();

        // detect fenced code start/end
        if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
          inFence = !inFence;
          return line;
        }

        // skip lines inside fenced code that start with optional spaces + #
        if (inFence && /^\s*#/.test(line)) return line;

        const match = trimmed.match(/^(#{1,6})\s+(.*)/);
        if (!match) return line;
        const [, hashes, content] = match;
        if (/^\d+$/.test(content.trim())) return line; // numeric-only headers ignored
        return `${"#".repeat(Math.min(hashes.length, 6))} ${content}`;
      })
      .join("\n");
  };

  // Normalize math, but skip when code appears
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

  /* -------------------------
     Header-increase helpers
     ------------------------- */

  // Return true if there is a H1 (line starting with '# ') outside fenced code.
  // Optionally ignore numeric-only H1s (like "# 1") using ignoreNumericH1 flag.
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
          // ignore structural numeric H1
          continue;
        }
        return true;
      }
    }
    return false;
  };

  // Increase all headings by one level outside fenced code; cap at 6
  // Skip lines inside fenced code that start with optional spaces + #
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

      // skip lines inside fenced code that start with optional spaces + #
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

  // Process text for header bump: only if there is a triggering H1 (respecting ignoreNumericH1).
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

  // Write directly to clipboard via GM_setClipboard, record what we wrote.
  const writeClipboardDirect = (text) => {
    try {
      GM_setClipboard(text);
      lastWrittenClipboard = text;
      return true;
    } catch (err) {
      console.warn(TAG, "GM_setClipboard failed:", err);
      return false;
    }
  };

  /* -------------------------
     Copy via per-turn copy button:
     - click the site's copy button
     - capture clipboard result
     - process headings (BUT ignore structural "# <number>" H1s)
     - write processed clipboard back
     ------------------------- */
  const copyViaButton = async (article, btn) => {
    await scrollIntoViewIfNeeded(article);
    const prev = await safeReadClipboard();
    btn.click();
    const copied = await waitForClipboardChange(prev);
    const fallback = article.innerText ? article.innerText.trim() : "";

    if (typeof copied !== "string") {
      // fallback to article text if clipboard didn't change
      return fallback;
    }

    // Process headings but IGNORE numeric H1 as trigger (so a "# 1" line won't cause bumping).
    const { changed, text } = processTextForHeaders(copied, {
      ignoreNumericH1: true,
    });
    if (changed) {
      writeClipboardDirect(text);
      return text;
    }

    return copied;
  };

  /* -------------------------
     UI: script copy button
     - When script composes full conversation output, do NOT run header processing.
     - Write final markdown directly to clipboard.
     ------------------------- */

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

  /* -------------------------
     URL comment helper (new)
     - returns the HTML comment line with current URL, followed by an empty line
     ------------------------- */
  const getCurrentUrlComment = () => {
    try {
      const href = location && location.href ? String(location.href) : "";
      // keep it simple and safe: if the href contains '-->' (unlikely), escape it minimally
      const safeHref = href.replace(/-->/g, "--\\>");
      return `<!-- ${safeHref} -->\n\n`;
    } catch (err) {
      return "<!--  -->\n\n";
    }
  };

  /* -------------------------
     Main conversation copy
     - assemble markdown as before
     - prepend URL comment to final markdown
     - write directly to clipboard (no header processing)
     (edited: retry on "ChatGPT said:" / "You said:")
     (edited: full retry once on forbidden strings)
  ------------------------- */
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

    // Prepend the current URL as an HTML comment to the final composed markdown.
    const finalMarkdown = getCurrentUrlComment() + markdown;

    // Gentle rule: the script's full output is structural; write it as-is (no processing).
    writeClipboardDirect(finalMarkdown);

    restoreScrollPosition(originalScrollTop);
    setWorkingState(false);

    // Retry logic: if forbidden strings exist and retry flag is true, run again once
    if (
      retry &&
      (finalMarkdown.includes("ChatGPT said:") ||
        finalMarkdown.includes("You said:"))
    ) {
      log(
        "Forbidden string detected in final markdown, retrying copyConversation once..."
      );
      await copyConversation(false); // retry once with retry=false to avoid infinite loop
    } else {
      log("COPY DONE");
    }
  };

  /* -------------------------
     Init
     - deprecated: no global clipboard watcher, no copy interception
     - only attach the script button and use per-turn copy hooks via copyViaButton
     ------------------------- */
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