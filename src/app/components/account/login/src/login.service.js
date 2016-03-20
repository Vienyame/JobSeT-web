/**
 * Created by Serge on 14/03/2016.
 */
(function () {
    'use strict';

    angular
        .module('com.jobset.login')
        .service('LoginService', LoginService);

    /** @ngInject **/
    function LoginService($resource, $http,$q,SERVER) {
        var uri = SERVER.HOSTNAME + SERVER.PORT;

        return {

            getOauth: function(provider, callback) {
                var cb = callback || angular.noop;
                var deferred = $q.defer();

                $http.get(uri+'/auth/'+provider).
                    success(function(data) {
                        deferred.resolve(data);
                        return cb();
                    }).
                    error(function(err) {
                        /*this.logout();*/
                        deferred.reject(err);
                        return cb(err);
                    }.bind(this));

                return deferred.promise;
            }
        }
    }

})();
