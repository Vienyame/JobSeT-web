(function() {
  'use strict';

  angular
    .module('com.jobset.web')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/index.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    $urlRouterProvider.otherwise('/login');

    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('authInterceptor');
  }

})();
