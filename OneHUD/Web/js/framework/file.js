﻿var OneHUDFile = function () {
    'use strict';

    var _uri = null;
    if (location.port !== '') {
        _uri = location.protocol + '//' + location.host.replace(':' + location.port, '') + ':' + location.port;
    } else {
        _uri = location.protocol + '//' + location.host + '/';
    }

    function loadDash(name) {
        if (name === undefined) {
            name = 'default';
        }

        var deferred = jQuery.Deferred();

        jQuery.ajax({
            url: _uri + 'File',
            cache: false,
            method: 'POST',
            data: {
                action: 'LoadDash',
                name: name
            }
        }).done(function (result) {
            var dash = null;
            if (result.Result) {
                dash = JSON.parse(result.Data);                
            }
            deferred.resolve(dash);
        });

        return deferred.promise();

    }

    return {
        loadDash: function (name) {
            return loadDash(name);
        }
    }

}();
//# sourceURL=/js/framework/file.js