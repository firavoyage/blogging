const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const get_collection_ids = () => {
  const links = document.querySelectorAll('.SelfCollectionItem-title a');
  const ids = [];
  for (const a of links) {
    const match = a.getAttribute('href').match(/\/collection\/(\d+)/);
    if (match) ids.push(match[1]);
  }
  return [...new Set(ids)];
};

const has_next_page = () => {
  const btns = document.querySelectorAll('.Pagination button');
  for (const btn of btns) {
    if (btn.innerText.includes('下一页') || btn.innerText.includes('next')) return true;
  }
  return false;
};

const click_next_page = async () => {
  const btns = document.querySelectorAll('.Pagination button');
  for (const btn of btns) {
    const text = btn.innerText;
    if (text.includes('下一页') || text.includes('next')) {
      btn.click();
      return true;
    }
  }
  return false;
};

const api_limit = 20;

const fetch_collection_items = async (collection_id, offset = 0) => {
  const url = `/api/v4/collections/${collection_id}/items?offset=${offset}&limit=${api_limit}`;
  const res = await fetch(url).then(r => r.json());
  return res;
};

const format_time = (raw, offset = '+08:00') => {
  if (!raw) return '';
  let ts = raw;
  if (typeof raw === 'string' && raw.includes('T')) {
    const d = new Date(raw);
    if (!isNaN(d)) ts = d.getTime() / 1000;
  }
  try {
    const date = new Date(ts * 1000);
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d2 = pad(date.getDate());
    const hh = pad(date.getHours());
    const mm = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    return `${y}.${m}.${d2} ${hh}:${mm}:${ss}`;
  } catch {
    return '';
  }
};

const safe_url = (u) => {
  if (!u) return '';
  if (u.startsWith('http://') || u.startsWith('https://')) return u;
  if (u.startsWith('//')) return 'https:' + u;
  return u;
};

const build_metadata = (item) => {
  const c = item.content || {};
  const author = c.author || {};
  const question = c.question || {};
  const authorName = author.name || '';
  const bio = author.headline || '';
  const avatar = author.avatar_url || '';
  const authorUrl = safe_url(author.url);
  const qUrl = safe_url(question.url);
  const published = format_time(c.created_time);
  const updated = format_time(c.updated_time);
  const qCreated = format_time(question.created_time || question.created);
  const qUpdated = format_time(question.updated_time || question.updated);
  const votes = c.voteup_count ?? '';
  const comments = c.comment_count ?? '';
  const type = c.type || '';
  const answerType = c.answer_type && c.answer_type !== 'NORMAL' ? ` (${c.answer_type})` : '';
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
  return { authorName, block: lines.join('\n') };
};

const convert_html_to_markdown = (html) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const parseNode = (node, level = 1) => {
    const txt = node.textContent.trim();
    if (node.nodeType === Node.TEXT_NODE) return txt;
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      if (tag === 'p') return [...node.childNodes].map(n => parseNode(n, level)).join('');
      if (tag === 'img') {
        const src = node.getAttribute('data-original') || node.src;
        return `![](${src})`;
      }
      if (tag === 'b' || tag === 'strong') return `**${txt}**`;
      if (tag === 'blockquote') {
        const inner = [...node.childNodes].map(n => parseNode(n, level)).join('').replace(/\n/g, '\n> ');
        return `> ${inner}`;
      }
      if (tag === 'a') return `[${txt}](${node.href})`;
      if (tag === 'ul' || tag === 'ol') {
        const items = [...node.children].map(li => `- ${parseNode(li, level)}`);
        return items.join('\n');
      }
      if (tag === 'li') return txt;
      if (tag.startsWith('h') && !isNaN(tag[1])) {
        const newLevel = Math.min(level + 1, 6);
        return `${'#'.repeat(newLevel)} ${txt}`;
      }
      if (tag === 'figure') {
        const img = node.querySelector('img');
        if (img) {
          const src = img.getAttribute('data-original') || img.src;
          return `![](${src})`;
        }
      }
      if (tag === 'br') return '\n';
      return [...node.childNodes].map(n => parseNode(n, level)).join('');
    }
    return '';
  };

  return [...tempDiv.childNodes]
    .map(n => parseNode(n))
    .filter(e => e)
    .join('\n\n');
};

const build_collection_header = (info, count) => {
  const lines = [];
  if (info.title) lines.push(`# ${info.title}`);
  if (info.description) lines.push(info.description);
  if (typeof count === 'number') lines.push(`**Items:** ${count}`);
  return lines.length ? lines.join('\n\n') + '\n\n---\n\n' : '';
};

const convertHtmlToMarkdown = convert_html_to_markdown;

const export_collection = async (collection_id) => {
  let offset = 0;
  let all = [];
  let total_items = 0;

  while (true) {
    const res = await fetch_collection_items(collection_id, offset);
    const items = res.data || [];
    if (!items.length) break;
    total_items = res.paging?.totals ?? total_items + items.length;
    const pageMd = items.map(item => {
      const meta = build_metadata(item);
      const c = item.content || {};
      const title = c.title || (c.question ? c.question.title : '') || '';
      const contentHtml = c.content || '';
      const md = `# ${title} ${meta.authorName}\n\n${meta.block}\n\n${convertHtmlToMarkdown(contentHtml)}\n`;
      return md;
    });
    all = all.concat(pageMd);
    if (res.paging?.is_end) break;
    offset += api_limit;
    await sleep(300);
  }

  const title = 'collection';
  const filename = `${title} ${collection_id} ${total_items}.md`;
  const output = [build_collection_header({ title }, total_items), all.join('\n\n---\n\n')].filter(Boolean).join('\n\n');
  const blob = new Blob([output], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  return { id: collection_id, count: total_items };
};

const collect_all_collection_ids = async () => {
  const all_ids = [];
  while (true) {
    const ids = get_collection_ids();
    all_ids.push(...ids);
    if (!has_next_page()) break;
    await click_next_page();
    await sleep(1500);
  }
  return [...new Set(all_ids)];
};

const main = async () => {
  console.log('Starting collection export...');
  const ids = await collect_all_collection_ids();
  console.log(`Found ${ids.length} collections`);
  for (const id of ids) {
    console.log(`Exporting collection ${id}...`);
    try {
      await export_collection(id);
    } catch (e) {
      console.error(`Failed to export ${id}:`, e);
    }
  }
  console.log('Done!');
};

main();
