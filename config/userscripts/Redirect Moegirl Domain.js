// ==UserScript==
// @name         Redirect Moegirl Domain
// @namespace    https://example.com/moegirl-redirect
// @version      1.0
// @description  Redirect zh.moegirl.org.cn to moegirl.icu
// @match        *://zh.moegirl.org.cn/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace("zh.moegirl.org.cn", "moegirl.icu");

  if (currentUrl !== newUrl) {
    window.location.replace(newUrl);
  }
})();