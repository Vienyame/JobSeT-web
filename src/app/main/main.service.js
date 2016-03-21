/**
 * Created by Serge on 14/03/2016.
 */
(function () {
    'use strict';

    angular
        .module('com.jobset.web')
        .service('MainService', MainService);

    /** @ngInject **/
    function MainService($location, $rootScope, $http, $cookieStore, $q, User, SERVER) {
        var uri = SERVER.HOSTNAME+SERVER.PORT;
        return{
            getEnterprises:getEnterprises,
            deleteEnterprises:deleteEnterprises
        };

        function getEnterprises(callback){
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.get(uri+'/api/enterprises')
                .success(function (data) {
               deferred.resolve(data);
                    return cb();
            })
                .error(function (err) {
                    deferred.reject(err);
                    return cb();
                });
            return deferred.promise;
        }

        function deleteEnterprises(thing){
            $http.delete(uri+'/api/enterprises/' + thing._id);
        }
    }
})();
