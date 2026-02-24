// ==UserScript==
// @name         Export Golaxy SGF with Custom Filename
// @namespace    custom
// @version      1.1
// @match        https://19x19.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function formatDate() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        return `${yyyy}${mm}${dd} ${hh}${min}.sgf`;
    }

    const originalCreateObjectURL = URL.createObjectURL;

    URL.createObjectURL = function(blob) {
        if (blob instanceof Blob && blob.type.includes("text")) {

            const filename = formatDate();
            const realUrl = originalCreateObjectURL.call(this, blob);

            // Trigger only your download
            const a = document.createElement('a');
            a.href = realUrl;
            a.download = filename;
            document.documentElement.appendChild(a);
            a.click();
            a.remove();

            // Revoke the URL after a moment
            setTimeout(() => URL.revokeObjectURL(realUrl), 1000);

            // Return a harmless dummy URL so site download fails silently
            return "javascript:void(0)";
        }

        return originalCreateObjectURL.call(this, blob);
    };

})();