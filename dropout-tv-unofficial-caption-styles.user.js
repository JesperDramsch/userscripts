// ==UserScript==
// @name        Unofficial Dropout.tv Caption Styles Override
// @namespace   Violentmonkey Scripts
// @match       https://embed.vhx.tv/videos/*
// @grant       GM_addStyle
// @version     0.1
// @author      Jesper Dramsch
// @run-at      document-start
// @downloadURL https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-caption-styles.user.js
// @updateURL   https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-caption-styles.user.js
// ==/UserScript==

// you can add more stylings and choose other colors explanation below
GM_addStyle ( `
    .vp-captions-window {
        background-color: #000000 !important;
        color: #ffffff !important;
        font-family: Arial !important;
        font-weight: 600 !important;
    }
` );

// Explanation of Keywords
// background-color changes the box around the captions
// color changes the text color
// font-family changes the type of font to use
// font-weight changes how bold your captions are

// For other colors search for "hex color picker" 
// https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker
