/**
 * Created by Serge on 14/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('com.jobset.settings')
        .controller('SettingsController', SettingsController);

    /** @ngInject **/
    function SettingsController($scope, User, Auth) {
        var vm =this;

        vm.errors = {};

        vm.changePassword = function(form) {
            vm.submitted = true;
            if(form.$valid) {
                Auth.changePassword( vm.user.oldPassword, vm.user.newPassword )
                    .then( function() {
                        vm.message = 'Password successfully changed.';
                    })
                    .catch( function() {
                        form.password.$setValidity('mongoose', false);
                        vm.errors.other = 'Incorrect password';
                        vm.message = '';
                    });
            }
        };
    }
})();
