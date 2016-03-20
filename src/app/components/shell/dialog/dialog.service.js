/**
 * Created by Serge on 16/03/2016.
 */
(function () {
    'use strict';

    angular
        .module('com.jobset.shell')
        .service('DialogService', DialogService);

    /** @ngInject **/
    function DialogService($http, MainService, SERVER) {
        var uri = SERVER.HOSTNAME + SERVER.PORT;

        return {
            postThings: postThings
        };

        function postThings(newThing) {
            $http.post(uri+'/api/things', {name: newThing}).success(function(){
                MainService.getThings();
            });
        }
    }
})();
