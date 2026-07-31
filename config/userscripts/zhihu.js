const PAGE_SIZE = 20;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUserToken() {
  const match = location.pathname.match(/people\/([^/]+)/);
  return match ? match[1] : null;
}

function safeUrl(u) {
  if (!u) return "";
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  if (u.startsWith("//")) return "https:" + u;
  return u;
}

function formatTime(raw, offset = "+08:00") {
  if (!raw) return "";

  let ts = raw;

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
}

function formatDateOnly(input) {
  if (!input) return "";
  const d = input instanceof Date ? input : new Date(input);
  if (isNaN(d)) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
}

function parseDateFromHint(hintText) {
  if (!hintText) return null;
  const isoMatch = hintText.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    const [_, y, m, d] = isoMatch;
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    if (!isNaN(dt)) return dt;
  }
  const dotMatch = hintText.match(/(\d{4})[.\u3002](\d{1,2})[.\u3002](\d{1,2})/);
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
}

function convertHtmlToMarkdown(html) {
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
}

function buildCollectionInfo() {
  const titleEl = document.querySelector(".CollectionDetailPageHeader-title");
  const descEl = document.querySelector(
    ".CollectionDetailPageHeader-description"
  );
  const hintEl = document.querySelector(".CollectionDetailPageHeader-hint");

  const title = titleEl ? titleEl.innerText.trim() : "";
  const description = descEl ? descEl.innerText.trim() : "";
  const hint = hintEl ? hintEl.innerText.trim() : "";

  const createdDate = parseDateFromHint(hint);

  return {
    title,
    description,
    hint,
    createdRaw: createdDate ? createdDate.toISOString() : "",
    createdDate,
  };
}

function buildCollectionHeaderMarkdown(collectionInfo, itemCount) {
  const lines = [];

  if (collectionInfo.title) {
    lines.push(`# ${collectionInfo.title}`);
  }

  if (collectionInfo.description) {
    lines.push(collectionInfo.description);
  }

  if (collectionInfo.createdDate) {
    lines.push(
      `**Created:** ${formatDateOnly(collectionInfo.createdDate)}`
    );
  } else if (collectionInfo.hint) {
    lines.push(`**Info:** ${collectionInfo.hint}`);
  }

  if (typeof itemCount === "number") {
    lines.push(`**Items:** ${itemCount}`);
  }

  return lines.length ? lines.join("\n\n") + "\n\n---\n\n" : "";
}

function buildMetadata(item) {
  const c = item.content || {};
  const author = c.author || {};
  const question = c.question || {};

  const authorName = author.name || "";
  const bio = author.headline || "";
  const avatar = author.avatar_url || "";
  const authorUrl = safeUrl(author.url);
  const qUrl = safeUrl(question.url);

  const published = formatTime(c.created_time);
  const updated = formatTime(c.updated_time);

  const qCreated = formatTime(question.created_time || question.created);
  const qUpdated = formatTime(question.updated_time || question.updated);

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
}

async function fetchCollectionItems(collectionId, offset = 0) {
  const url = `/api/v4/collections/${collectionId}/items?offset=${offset}&limit=${PAGE_SIZE}`;
  const res = await fetch(url).then((r) => r.json());
  return res;
}

async function exportCollection(collectionId, collectionInfoFromList) {
  const collectionInfo = {
    title: collectionInfoFromList.title || "",
    description: collectionInfoFromList.description || "",
    hint: collectionInfoFromList.hint || "",
    createdRaw: "",
    createdDate: parseDateFromHint(collectionInfoFromList.hint || ""),
  };

  let collectionTitle = collectionInfo.title || "Zhihu Collection";
  collectionTitle = collectionTitle.replace(/生成PDF.*$/, "").trim();

  let all = [];
  let count = 0;
  let offset = 0;
  let isEnd = false;

  while (!isEnd) {
    const res = await fetchCollectionItems(collectionId, offset);

    const pageMd = (res.data || []).map((item) => {
      const meta = buildMetadata(item);
      const c = item.content || {};
      const title = c.title || (c.question ? c.question.title : "") || "";

      const contentHtml = c.content || "";
      const md =
        `# ${title} ${meta.authorName}\n\n` +
        `${meta.block}\n\n` +
        convertHtmlToMarkdown(contentHtml) +
        "\n";

      return md;
    });

    count += pageMd.length;
    all = all.concat(pageMd);

    isEnd = res.paging?.is_end ?? true;
    offset += PAGE_SIZE;
  }

  const collectionHeader = buildCollectionHeaderMarkdown(collectionInfo, count);

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
}

function getCollectionIdsFromDom() {
  const items = document.querySelectorAll(".SelfCollectionItem");
  const collections = [];

  for (const item of items) {
    const link = item.querySelector("a.SelfCollectionItem-title");
    const descEl = item.querySelector(".SelfCollectionItem-description");
    const actionsEl = item.querySelector(".SelfCollectionItem-actions");

    if (!link) continue;

    const match = link.href.match(/\/collection\/(\d+)/);
    if (!match) continue;

    const id = match[1];
    const title = link.innerText.trim();
    const description = descEl ? descEl.innerText.trim() : "";
    const hint = actionsEl ? actionsEl.innerText.trim() : "";

    collections.push({ id, title, description, hint });
  }

  return collections;
}

function hasNextPage() {
  const nextBtn = document.querySelector(".PaginationButton-next");
  return nextBtn && !nextBtn.disabled;
}

async function clickNextPage() {
  const nextBtn = document.querySelector(".PaginationButton-next");
  if (nextBtn) {
    nextBtn.click();
    await sleep(1500);
  }
}

async function collectAllCollections() {
  const allCollections = [];

  while (true) {
    const collections = getCollectionIdsFromDom();
    allCollections.push(...collections);

    if (!hasNextPage()) break;

    await clickNextPage();
  }

  return allCollections;
}

async function main() {
  const userToken = getUserToken();
  if (!userToken) {
    console.error("Cannot find user token");
    return;
  }

  console.log("Collecting collections...");
  const collections = await collectAllCollections();
  console.log(`Found ${collections.length} collections`);

  for (let i = 0; i < collections.length; i++) {
    const { id, title } = collections[i];
    console.log(`Exporting collection ${i + 1}/${collections.length}: ${title} (${id})`);
    await exportCollection(id, collections[i]);
    await sleep(500);
  }

  console.log("Done!");
}

main();