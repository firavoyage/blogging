// ==UserScript==
// @name         Clean URL Parameters
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove tracking parameters like utm_source from URLs
// @author       Your Name
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  // List of query parameters to remove
  const paramsToRemove = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "igshid",
    "mc_cid",
    "mc_eid",
  ];

  // Parse current URL
  const url = new URL(window.location.href);
  let changed = false;

  paramsToRemove.forEach((param) => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  });

  // If any parameters were removed, redirect to the cleaned URL
  if (changed) {
    window.history.replaceState({}, document.title, url.toString());
  }
})();