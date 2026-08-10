// ==UserScript==
// @name         Navigate AI Sensei with HJKL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Map h/j/k/l to backward/step-forward/step-backward/forward buttons
// @match        https://ai-sensei.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '[title="Go back to previous mistake           [ Shift+← ]"]',
        // 'h': '[title="Go to the beginning           [ Ctrl+Shift+← ]"]',
        'j': '[title="Go forward one move           [ → ]"]',
        'k': '[title="Go back one move           [ ← ]"]',
        'l': '[title="Go forward to next mistake           [ Shift+→ ]"]'
        // 'l': '[title="Go to the end           [ Ctrl+Shift+→ ]"]'
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