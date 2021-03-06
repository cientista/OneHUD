﻿var OneHUDClassCache = function () {
    'use strict';

    var _pageNames = [];
    var _pages = [];

    function init(options) {
        _pageNames = [];
        var deferred = jQuery.Deferred();

        jQuery.each(options.Pages, function (index, page) {
            _pageNames.push(page.FileName);
        });

        head.load(_pageNames, function () {

            jQuery.each(options.Pages, function (index, page) {
                var pageClass = 'OneHUDView' + page.Name;
                _pages[page.Name] = new window[pageClass];
            });

            deferred.resolve(options);
        });

        return deferred.promise();
    }

    return {
        init: function (options) {
            return init(options);
        },

        getPage: function (page) {
            return _pages[page];
        },

        getPages: function () {
            return _pages;
        },

        pageExists: function (page) {
            if (_pages[page] !== undefined) {
                return true;
            } else {
                return false;
            }
        }
    }
}();
//# sourceURL=/js/framework/classcache.js