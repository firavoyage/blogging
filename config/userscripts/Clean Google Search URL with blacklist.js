// ==UserScript==
// @name         Clean Google Search URL with blacklist
// @namespace    clean-google-url-blacklist
// @version      1.3
// @description  Remove known tracking parameters from Google search URLs without reloading
// @include      *://*.google.*/*
// @run-at       document-start
// ==/UserScript==

(function () {
  const blacklist = new Set([
    "oq",
    "gs_lcrp",
    "gs_lp",
    "gs_ssp",
    "gs_mss",
    "client",
    "sourceid",
    "ie",
    "ved",
    "ei",
    "sca_esv",
    "sxsrf",
    "rlz",
    "iflsig",
    "aep",
    "prmd",
    "source",
    "sa",
    "csuir",
    "mtid",
    "mstk",
  ]);

  function cleanUrl() {
    const url = new URL(window.location.href);
    let changed = false;

    for (const param of [...url.searchParams.keys()]) {
      if (blacklist.has(param)) {
        url.searchParams.delete(param);
        changed = true;
      }
    }

    if (changed) {
      const newQuery = url.searchParams.toString();
      const newUrl =
        url.pathname +
        (newQuery ? "?" + newQuery : "") +
        url.hash;

      window.history.replaceState({}, document.title, newUrl);
    }
  }

  // Run immediately
  cleanUrl();

  // Poll every 100ms
  setInterval(cleanUrl, 100);
})();