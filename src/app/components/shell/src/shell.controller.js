(function () {
    'use strict';

    angular
        .module('com.jobset.shell')
        .controller('ShellController', function ($mdSidenav, $mdDialog, $scope, $location,$document, Auth) {
            var vm = this;

            vm.isLoggedIn = Auth.isLoggedIn;
            vm.isAdmin = Auth.isAdmin;
            vm.getCurrentUser = Auth.getCurrentUser;

            vm.logout = function () {
                Auth.logout();
                $location.path('/login');
            };

            vm.isActive = function (route) {
                return route === $location.path();
            };

            vm.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };

            var originatorEv;
            vm.openMenu = function ($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };

            vm.notificationsEnabled = true;
            vm.toggleNotifications = function () {
                vm.notificationsEnabled = !vm.notificationsEnabled;
            };

            vm.redial = function () {
                $mdDialog.show(
                    $mdDialog.alert()
                        .targetEvent(originatorEv)
                        .clickOutsideToClose(true)
                        .parent('body')
                        .title('Suddenly, a redial')
                        .content('You just called a friend; who told you the most amazing story. Have a cookie!')
                        .ok('That was easy')
                );
                originatorEv = null;
            };

            vm.checkVoicemail = function () {
                // This never happens.
            };

            vm.showAddDialog = function ($event) {
                var parentEl = angular.element($document[0].body);
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: $event,
                    templateUrl: 'app/components/shell/dialog/dialog.html',
                    controller: 'DialogController',
                    controllerAs: 'dialog'
                });
            };
        })
})();
