/**
 * Created by Serge on 14/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('com.jobset.settings', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'app/components/account/settings/src/index.html',
                    controller: 'SettingsController',
                    controllerAs: 'settings',
                    authenticate: true
                });
        });

})();
