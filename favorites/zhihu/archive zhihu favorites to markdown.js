// ==UserScript==
// @name         Zhihu Collection Markdown Export (Enhanced)
// @version      1.3.1
// @description  Export Zhihu collections into Markdown with full metadata (collection header included).
// @author       Fira
// @match        https://www.zhihu.com/collection/*
// @grant        GM_download
// ==/UserScript==

(function () {
  "use strict";

  const myCollectionExport = {
    init() {
      const exportButton = document.createElement("button");
      exportButton.textContent = "export to markdown";
      exportButton.style.position = "fixed";
      exportButton.style.top = "10px";
      exportButton.style.right = "10px";
      exportButton.style.zIndex = "1000";
      exportButton.style.padding = "10px";
      exportButton.style.backgroundColor = "#2cbe60";
      exportButton.style.color = "white";
      exportButton.style.borderRadius = "5px";
      document.body.appendChild(exportButton);

      exportButton.onclick = () => this.exportAll();
    },

    async exportAll() {
      const matched = location.pathname.match(/(?<=\/collection\/)\d+/);
      const collectionId = matched ? matched[0] : "";
      if (!collectionId) return;

      // Gather collection-level info (title/description/created)
      const collectionInfo = this.buildCollectionInfo();

      // Prefer title from DOM but fall back to a generic one
      let collectionTitle = collectionInfo.title || "Zhihu Collection";
      collectionTitle = collectionTitle.replace(/生成PDF.*$/, "").trim();

      const pagesEl = document.querySelectorAll(
        ".Pagination button:not(.PaginationButton--ellipsis)"
      );
      const totalPages =
        pagesEl.length > 0 ? Number(pagesEl[pagesEl.length - 2].innerText) : 1;

      let all = [];
      let count = 0;

      for (let page = 1; page <= totalPages; page++) {
        const offset = (page - 1) * 20;
        const res = await fetch(
          `/api/v4/collections/${collectionId}/items?offset=${offset}&limit=20`
        ).then((r) => r.json());

        const pageMd = (res.data || []).map((item) => {
          const meta = this.buildMetadata(item);
          const c = item.content || {};
          const title = c.title || (c.question ? c.question.title : "") || "";

          const contentHtml = c.content || "";
          const md =
            `# ${title} ${meta.authorName}\n\n` +
            `${meta.block}\n\n` +
            this.convertHtmlToMarkdown(contentHtml) +
            "\n";

          return md;
        });

        count += pageMd.length;
        all = all.concat(pageMd);
      }

      // Build collection header and place it at top of output
      const collectionHeader = this.buildCollectionHeaderMarkdown(
        collectionInfo,
        count
      );

      const output = [collectionHeader, all.join("\n\n---\n\n")]
        .filter(Boolean)
        .join("\n\n");

      const blob = new Blob([output], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${collectionTitle} ${count}.md`;
      a.click();
      URL.revokeObjectURL(url);
    },

    safeUrl(u) {
      if (!u) return "";
      if (u.startsWith("http://") || u.startsWith("https://")) return u;
      if (u.startsWith("//")) return "https:" + u;
      return u;
    },

    formatTime(raw, offset = "+08:00") {
      if (!raw) return "";

      let ts = raw;

      // raw may be ISO date string (question.created)
      if (typeof raw === "string" && raw.includes("T")) {
        const d = new Date(raw);
        if (!isNaN(d)) ts = d.getTime() / 1000;
      }

      try {
        const date = new Date(ts * 1000);
        const pad = (n) => String(n).padStart(2, "0");

        const y = date.getFullYear();
        const m = pad(date.getMonth() + 1);
        const d2 = pad(date.getDate());
        const hh = pad(date.getHours());
        const mm = pad(date.getMinutes());
        const ss = pad(date.getSeconds());

        return `${y}.${m}.${d2} ${hh}:${mm}:${ss}`;
      } catch {
        return "";
      }
    },

    // Format a Date object (or parsable string) into YYYY.MM.DD (no time)
    formatDateOnly(input) {
      if (!input) return "";
      const d = input instanceof Date ? input : new Date(input);
      if (isNaN(d)) return "";
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
    },

    buildCollectionInfo() {
      // Gentle, robust extraction of collection-level metadata from DOM
      const titleEl = document.querySelector(".CollectionDetailPageHeader-title");
      const descEl = document.querySelector(
        ".CollectionDetailPageHeader-description"
      );
      const hintEl = document.querySelector(".CollectionDetailPageHeader-hint");

      const title = titleEl ? titleEl.innerText.trim() : "";
      const description = descEl ? descEl.innerText.trim() : "";
      const hint = hintEl ? hintEl.innerText.trim() : "";

      // Try to extract a creation date from the hint (supports multiple formats)
      const createdDate = this.parseDateFromHint(hint);

      return {
        title,
        description,
        hint,
        createdRaw: createdDate ? createdDate.toISOString() : "",
        createdDate, // may be null
      };
    },

    // look for YYYY-MM-DD or YYYY.MM.DD or YYYY年MM月DD日
    parseDateFromHint(hintText) {
      if (!hintText) return null;
      // Patterns
      const isoMatch = hintText.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
      if (isoMatch) {
        const [_, y, m, d] = isoMatch;
        const dt = new Date(Number(y), Number(m) - 1, Number(d));
        if (!isNaN(dt)) return dt;
      }
      const dotMatch = hintText.match(/(\d{4})[.\u3002](\d{1,2})[.\u3002](\d{1,2})/); // handles 2025.06.18
      if (dotMatch) {
        const [_, y, m, d] = dotMatch;
        const dt = new Date(Number(y), Number(m) - 1, Number(d));
        if (!isNaN(dt)) return dt;
      }
      const cnMatch = hintText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (cnMatch) {
        const [_, y, m, d] = cnMatch;
        const dt = new Date(Number(y), Number(m) - 1, Number(d));
        if (!isNaN(dt)) return dt;
      }
      return null;
    },

    buildCollectionHeaderMarkdown(collectionInfo, itemCount) {
      // Compose a small, clear collection header. Skip fields that are empty.
      const lines = [];

      if (collectionInfo.title) {
        lines.push(`# ${collectionInfo.title}`);
      }

      if (collectionInfo.description) {
        // keep a blank line before description if title present
        lines.push(collectionInfo.description);
      }

      if (collectionInfo.createdDate) {
        lines.push(`**Created:** ${this.formatDateOnly(collectionInfo.createdDate)}`);
      } else if (collectionInfo.hint) {
        // if we couldn't parse date but have hint text, include it gently
        lines.push(`**Info:** ${collectionInfo.hint}`);
      }

      // show item count if available
      if (typeof itemCount === "number") {
        lines.push(`**Items:** ${itemCount}`);
      }

      return lines.length ? lines.join("\n\n") + "\n\n---\n\n" : "";
    },

    buildMetadata(item) {
      const c = item.content || {};
      const author = c.author || {};
      const question = c.question || {};

      const authorName = author.name || "";
      const bio = author.headline || "";
      const avatar = author.avatar_url || "";
      const authorUrl = this.safeUrl(author.url);
      const qUrl = this.safeUrl(question.url);

      const published = this.formatTime(c.created_time);
      const updated = this.formatTime(c.updated_time);

      const qCreated = this.formatTime(
        question.created_time || question.created
      );
      const qUpdated = this.formatTime(
        question.updated_time || question.updated
      );

      const votes = c.voteup_count ?? "";
      const comments = c.comment_count ?? "";
      const type = c.type || "";
      const answerType =
        c.answer_type && c.answer_type !== "NORMAL"
          ? ` (${c.answer_type})`
          : "";

      const lines = [
        `**Author:** ${authorName}  `,
        `**Bio:** ${bio}  `,
        `**Avatar:** ![](${avatar})  `,
        `**Author URL:** ${authorUrl}  `,
        `**Published:** ${published}  `,
        `**Updated:** ${updated}  `,
        `**Question:** ${qUrl}  `,
        `**Question Created:** ${qCreated}  `,
        `**Question Updated:** ${qUpdated}  `,
        `**Votes:** ${votes}  `,
        `**Comments:** ${comments}  `,
        `**Type:** ${type}${answerType}  `,
      ];

      return {
        authorName,
        block: lines.join("\n"),
      };
    },

    convertHtmlToMarkdown(html) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      function parseNode(node, level = 1) {
        const txt = node.textContent.trim();
        if (node.nodeType === Node.TEXT_NODE) return txt;

        if (node.nodeType === Node.ELEMENT_NODE) {
          const tag = node.tagName.toLowerCase();

          if (tag === "p")
            return [...node.childNodes]
              .map((n) => parseNode(n, level))
              .join("");

          if (tag === "img") {
            const src = node.getAttribute("data-original") || node.src;
            return `![](${src})`;
          }

          if (tag === "b" || tag === "strong") return `**${txt}**`;

          if (tag === "blockquote") {
            const inner = [...node.childNodes]
              .map((n) => parseNode(n, level))
              .join("")
              .replace(/\n/g, "\n> ");
            return `> ${inner}`;
          }

          if (tag === "a") return `[${txt}](${node.href})`;

          if (tag === "ul" || tag === "ol") {
            const items = [...node.children].map(
              (li) => `- ${parseNode(li, level)}`
            );
            return items.join("\n");
          }

          if (tag === "li") return txt;

          if (tag.startsWith("h") && !isNaN(tag[1])) {
            const newLevel = Math.min(level + 1, 6);
            return `${"#".repeat(newLevel)} ${txt}`;
          }

          if (tag === "figure") {
            const img = node.querySelector("img");
            if (img) {
              const src = img.getAttribute("data-original") || img.src;
              return `![](${src})`;
            }
          }

          if (tag === "br") return "\n";

          return [...node.childNodes].map((n) => parseNode(n, level)).join("");
        }

        return "";
      }

      return [...tempDiv.childNodes]
        .map((n) => parseNode(n))
        .filter((e) => e)
        .join("\n\n");
    },
  };

  myCollectionExport.init();
})();
