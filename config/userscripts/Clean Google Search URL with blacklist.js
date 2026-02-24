// ==UserScript==
// @name         Clean Google Search URL with blacklist
// @namespace    clean-google-url-blacklist
// @version      1.1
// @description  Remove known tracking parameters from Google search URLs without reloading
// @match        https://www.google.com/search*
// @run-at       document-start
// ==/UserScript==

(function () {
  const url = new URL(window.location.href);

  // Parameters that are safe to remove
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
  ]);

  let changed = false;

  for (const param of [...url.searchParams.keys()]) {
    if (blacklist.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  }

  if (changed) {
    window.history.replaceState(
      {},
      document.title,
      url.pathname + "?" + url.searchParams.toString()
    );
  }
})();