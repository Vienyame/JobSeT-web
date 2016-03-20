(function () {
    'use strict';

    angular.module('com.jobset.admin',[])
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'app/components/admin/src/index.html',
                    controller: 'AdminController',
                    controllerAs:'admin'
                });
        })
})();
