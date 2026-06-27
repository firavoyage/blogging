    // ==UserScript==
    // @name         Normalize Copy
    // @namespace    http://tampermonkey.net
    // @version      1.3
    // @description  Stop websites from altering DOM during copy, preserving pure HTML clipboard data
    // @author       You
    // @match        https://www.google.com/*
    // @grant        none
    // @run-at       document-start
    // ==/UserScript==

    // it blocks "citations to md", but magically fixes all possible flaws and quirks

    (function() {
        'use strict';

        // 1. Block the website from registering copy event listeners
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function(type, listener, options) {
            if (type === 'copy' || type === 'cut' || type === 'beforecopy') {
                return; // Reject the site's listener
            }
            return originalAddEventListener.apply(this, arguments);
        };

        // 2. Clear legacy inline event handlers
        document.addEventListener('readystatechange', () => {
            if (document.body) {
                document.body.oncopy = null;
                document.body.oncut = null;
            }
        });

        // 3. Catch the copy event, extract the raw HTML selection, and write it to the clipboard
        window.addEventListener('copy', function(e) {
            e.stopPropagation(); // Block site scripts
            e.preventDefault();  // Stop default browser copy behavior

            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) return;

            // Extract the exact HTML structure of the highlighted text
            const range = selection.getRangeAt(0);
            const container = document.createElement('div');
            container.appendChild(range.cloneContents());

            const htmlContent = container.innerHTML;
            const textContent = selection.toString();

            // Write both formats so destination apps (Word, OneNote, Rich Editors) parse it correctly
            if (htmlContent) {
                e.clipboardData.setData('text/html', htmlContent);
                e.clipboardData.setData('text/plain', textContent);
            }
        }, true); // Capture phase execution
    })();
