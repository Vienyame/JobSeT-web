/**
 * Created by Serge on 16/03/2016.
 */
(function(angular) {
    'use strict';

    angular
        .module('com.jobset.web')
        .factory('authInterceptor', function ($rootScope, $q, $cookies, $location) {
            return {
                // Add authorization token to headers
                request: function (config) {
                    config.headers = config.headers || {};
                    if ($cookies.get('token')) {
                        config.headers.Authorization = 'Bearer ' + $cookies.get('token');
                    }
                    return config;
                },

                // Intercept 401s and redirect you to login
                responseError: function(response) {
                    if(response.status === 401) {
                        $location.path('/login');
                        // remove any stale tokens
                        $cookies.remove('token');
                        return $q.reject(response);
                    }
                    else {
                        return $q.reject(response);
                    }
                }
            };
        })

})(angular);
