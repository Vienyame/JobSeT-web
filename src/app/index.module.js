(function() {
  'use strict';

  angular
    .module('com.jobset.web',
    [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ngMaterial',
      'toastr',
      'btford.socket-io',

      'com.jobset.account',
      'com.jobset.admin',
      'com.jobset.auth',
      'com.jobset.socket',
      'com.jobset.shell'
    ]
  );

})();
