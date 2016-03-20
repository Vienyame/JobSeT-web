(function () {
'use strict';

angular
    .module('com.jobset.socket')
    .factory('socket', function () {
        return {
            socket: {
                connect: function () {
                },
                on: function () {
                },
                emit: function () {
                },
                receive: function () {
                }
            },

            syncUpdates: function () {
            },
            unsyncUpdates: function () {
            }
        };
    })
})();
