/**
 * Created by Serge on 14/03/2016.
 */
(function () {
    'use strict';

    angular
        .module('com.jobset.login')
        .controller('LoginController', LoginController);

    /** @ngInject **/
    function LoginController(Auth, $location, $window, LoginService) {
        var vm = this;

        vm.user = {};
        vm.errors = {};

        vm.login = function (form) {
            vm.submitted = true;
            if (form.$valid) {
                Auth.login({
                    email: vm.user.email,
                    password: vm.user.password
                })
                    .then(function () {
                        // Logged in, redirect to home
                        $location.path('/');
                    })
                    .catch(function (err) {
                        vm.errors.other = err.message;
                    });
            }

        };

        vm.loginOauth = function (provider) {
            LoginService.getOauth(provider).then(function(){
            });
        }
    }
})();
