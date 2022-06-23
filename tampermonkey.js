// ==UserScript==
// @name         ISUI Styles
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ноуп
// @author       You
// @match        
// @icon         
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     GENERAL https://raw.githubusercontent.com/annkirilenko/isui-styles/main/general.css
// @resource     NAVBAR https://raw.githubusercontent.com/annkirilenko/isui-styles/main/navbar.css
// @resource     PANEL_FEEDBACK https://raw.githubusercontent.com/annkirilenko/isui-styles/main/panel-feedback.css
// ==/UserScript==

'use strict';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function injectStyles() {
    const files = [
        'GENERAL',
        'NAVBAR',
        'PANEL_FEEDBACK'
    ];

    files.forEach((file, i) => {
        const css = GM_getResourceText(file);
        GM_addStyle(css);
    });
}

ready(injectStyles);
