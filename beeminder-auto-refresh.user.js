// ==UserScript==
// @name         Refresh Beeminder on Load
// @version      0.1
// @description  Automatically refresh Beeminder on load
// @author       Jesper Dramsch
// @match        https://www.beeminder.com/*
// @run-at       document-end
// @grant        none
// @namespace    Violentmonkey Scripts
// @downloadURL https://github.com/JesperDramsch/userscripts/raw/main/beeminder-auto-refresh.user.js
// @updateURL   https://github.com/JesperDramsch/userscripts/raw/main/beeminder-auto-refresh.user.js
// ==/UserScript==

// Listen for the visibilitychange event
document.addEventListener('visibilitychange', function() {
  // Check if the tab is visible
  if (!document.hidden) {
    // Reload the page
    location.reload();
  }
});