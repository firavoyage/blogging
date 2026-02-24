// ==UserScript==
// @name         Navigate Golaxy with JK
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Map j to next and k to previous on 19x19.com (on key release)
// @match        https://19x19.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function clickMove(index) {
        const buttons = document.querySelectorAll('.move-btn-body > li.normal.move-item');
        if (buttons.length > index) {
            buttons[index].dispatchEvent(
                new MouseEvent('click', { bubbles: true, cancelable: true })
            );
        }
    }

    document.addEventListener('keyup', function (e) {
        if (
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA' ||
            e.target.isContentEditable
        ) return;

        if (e.key === 'k') {
            clickMove(2); // 3rd item: <
        }

        if (e.key === 'j') {
            clickMove(3); // 4th item: >
        }
    }, true); // capture phase
})();