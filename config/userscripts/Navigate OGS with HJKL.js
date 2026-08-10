// ==UserScript==
// @name         Navigate OGS with HJKL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Map h/j/k/l to backward/step-forward/step-backward/forward buttons on OGS
// @match        https://online-go.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '.fa-backward',
        'j': '.fa-step-forward',
        'k': '.fa-step-backward',
        'l': '.fa-forward'
    };

    document.addEventListener('keydown', function(e) {
        // Don't hijack keys while typing in inputs/textareas/contenteditable
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

        const selector = keyMap[e.key];
        if (!selector) return;

        const el = document.querySelector(selector);
        if (el) {
            el.click();
            e.preventDefault();
        }
    }, true);
})();