// ==UserScript==
// @name         Redirect Google gl us
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://*/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function isGoogleHost(host) {
        return /^(.+\.)?google\./i.test(host);
    }

    function modifyLink(link) {
        if (!link || !link.href) return;

        try {
            const url = new URL(link.href);

            if (!isGoogleHost(url.hostname)) return;

            if (url.searchParams.get('gl') !== 'us') {
                url.searchParams.set('gl', 'us');
                link.href = url.toString();
            }
        } catch (e) {
            // Ignore invalid URLs
        }
    }

    function processAllLinks(root = document) {
        root.querySelectorAll('a[href]').forEach(modifyLink);
    }

    // Initial scan
    processAllLinks();

    // Watch for dynamically added links
    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.nodeType !== 1) continue;

                if (node.tagName === 'A') {
                    modifyLink(node);
                } else {
                    processAllLinks(node);
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();