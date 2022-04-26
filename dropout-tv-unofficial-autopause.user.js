// ==UserScript==
// @name        Pause Dropout.tv videos automatically for live sessions
// @namespace   Violentmonkey Scripts
// @match       https://embed.vhx.tv/videos/*
// @grant       GM_addStyle
// @version     0.4
// @author      Jesper Dramsch
// @require     https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// @downloadURL https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-autopause.user.js
// @updateURL   https://github.com/JesperDramsch/userscripts/raw/main/dropout-tv-unofficial-autopause.user.js
// ==/UserScript==

//--- Note that contains() is CASE-SENSITIVE.
waitForKeyElements ("div.pause-icon", (element) => {element.click();});

function clickOnPlayButton (jNode) {
    var clickEvent  = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('click', true, true);
    jNode[0].dispatchEvent (clickEvent);
} 
