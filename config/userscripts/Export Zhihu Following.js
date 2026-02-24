// ==UserScript==
// @name         Export Zhihu Following
// @namespace    zhihu-following-export
// @version      0.1.0
// @description  Export Zhihu following list via network requests
// @match        https://www.zhihu.com/people/*/following*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @connect      www.zhihu.com
// ==/UserScript==

(function () {
  "use strict";

  const LIMIT = 20;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getUserToken() {
    const match = location.pathname.match(/people\/([^/]+)/);
    return match ? match[1] : null;
  }

  function fetchFollowees(userToken, offset = 0) {
    const url =
      `https://www.zhihu.com/api/v4/members/${userToken}/followees` +
      `?offset=${offset}&limit=${LIMIT}`;

    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "GET",
        url,
        responseType: "json",
        onload(res) {
          if (res.status !== 200) {
            reject(new Error(`HTTP ${res.status}`));
            return;
          }
          resolve(res.response);
        },
        onerror(err) {
          reject(err);
        },
      });
    });
  }

  async function collectAllFollowees(userToken) {
    let offset = 0;
    let users = [];
    let total = 0;

    while (true) {
      const data = await fetchFollowees(userToken, offset);

      if (!total) {
        total = data.paging?.totals ?? 0;
      }

      for (const item of data.data) {
        users.push({
          name: item.name,
          bio: item.headline || "",
          avatar: item.avatar_url,
          profile: `https://www.zhihu.com/people/${item.url_token}`,
          stats: {
            followers: item.follower_count,
            answers: item.answer_count,
            articles: item.articles_count,
          },
        });
      }

      if (data.paging?.is_end) break;

      offset += LIMIT;
      await sleep(300); // stay gentle with the server
    }

    return { users, total };
  }

  async function exportFollowing() {
    const userToken = getUserToken();
    if (!userToken) return;

    try {
      button.textContent = "…";

      const { users, total } = await collectAllFollowees(userToken);

      const payload = {
        time: new Date().toISOString(),
        total,
        users,
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });

      const filename = `zhihu-following-${userToken}.json`;

      GM_download({
        url: URL.createObjectURL(blob),
        name: filename,
      });
    } catch (err) {
      console.error("[Zhihu Export]", err);
      alert("Export failed. See console for details.");
    } finally {
      button.textContent = "↓";
    }
  }

  // ---- UI button ----

  const button = document.createElement("div");
  button.textContent = "↓";

  Object.assign(button.style, {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#444",
    cursor: "pointer",
    zIndex: 9999,
    userSelect: "none",
  });

  button.addEventListener("click", exportFollowing);
  document.body.appendChild(button);
})();