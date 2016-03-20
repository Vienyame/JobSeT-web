/**
 * Created by Serge on 14/03/2016.
 */
(function () {
    'use strict';

    angular
        .module('com.jobset.auth')
        .factory('User', User);

    /** @ngInject **/
    function User($resource, SERVER) {
        var uri = SERVER.HOSTNAME + SERVER.PORT;
        return $resource(uri + '/api/users/:id/:controller', {id: '@_id'},
            {
                changePassword: {
                    method: 'PUT',
                    params: {
                        controller: 'password'
                    }
                },
                get: {
                    method: 'GET',
                    params: {
                        id: 'me'
                    }
                }
            })
    }

})();
