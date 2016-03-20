/**
 * Created by Serge on 14/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('com.jobset.login', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/components/account/login/src/index.html',
                    controller: 'LoginController as login',
                    controllerAs: 'login'
                });
        });

})();
