/**
 * Created by Serge on 14/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('com.jobset.signup', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'app/components/account/signup/src/index.html',
                    controller: 'SignupController as signup',
                    controllerAs: 'signup'
                });
        });

})();
