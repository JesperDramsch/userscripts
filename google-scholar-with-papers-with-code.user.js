// ==UserScript==
// @name         Google Scholar with Papers With Code
// @namespace    http://dramsch.net/
// @version      0.2
// @description  Enhance Google Scholar with Paper with Code links
// @author       Jesper Dramsch
// @include      /^[https,http]+:\/\/scholar\.google\.[a-z]+\/scholar\?.*$/
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    $( '.gs_ri' ).each(function( index ) {

        var paper = $( this );

        // Parse the titles and do a search
        var query = 'https://paperswithcode.com/search?q=';
        var title = paper.children( '.gs_rt' ).children().last().text().trim().replace(" ", "-"); // Replace because of PwC redirects to methods
        // var authors = paper.children('.gs_a').text().split('-')[0].split(' ');

        query += encodeURIComponent(title); // Get Title

        // Attaching a User-Agent header throws an unsafe header error on Chrome, so we can
        // provide contact details as specified in the crossref docs as part of the query
        // https://github.com/CrossRef/rest-api-doc#good-manners--more-reliable-service
        // query += '&mailto=' + encodeURIComponent('s@swdg.io');

        GM_xmlhttpRequest ( {
            method:     'GET',
            url:        query,
            responseType: "document",
            onload:     function (responseDetails) {
                console.log()
                var a = $($(responseDetails.response).find('.author-section').children()[1]);
                if (a.length == 0)
                {
                    var a = $("<a>no code</a>"); // No results
                    a.attr("href", query);
                }
                else {
                    a.attr("href", 'https://paperswithcode.com' + a.attr("href")); // If exist, use page url
                }
                paper.children('.gs_fl').append(a);
            }
        });
    });

})();
