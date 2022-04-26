// ==UserScript==
// @name        Enable Dropout.tv Captions Automatically
// @namespace   Violentmonkey Scripts
// @match       https://embed.vhx.tv/videos/*
// @grant       GM_addStyle
// @version     0.1
// @author      Jesper Dramsch
// @require     http://code.jquery.com/jquery-3.4.1.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @downloadURL https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-autopause.user.js
// @updateURL   https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-autopause.user.js
// ==/UserScript==

//--- Note that contains() is CASE-SENSITIVE.
waitForKeyElements ("div.pause-icon", clickOnCaptionButton);

function clickOnCaptionButton (jNode) {
    var clickEvent  = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('click', true, true);
    jNode[0].dispatchEvent (clickEvent);
}
