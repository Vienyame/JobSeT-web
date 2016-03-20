(function () {
    'use strict';

    angular
        .module('com.jobset.admin')
        .controller('AdminController', AdminController);

    /** @ngInject **/
    function AdminController($http, Auth, User) {
        var vm = this;
        // Use the User $resource to fetch all users
        vm.users = User.query();

        vm.delete = function (user) {
            User.remove({id: user._id});
            angular.forEach(vm.users, function (u, i) {
                if (u === user) {
                    vm.users.splice(i, 1);
                }
            });
        };
    }
})();
