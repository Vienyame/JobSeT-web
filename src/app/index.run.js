(function() {
  'use strict';

  angular
    .module('com.jobset.web')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location, Auth) {

    $log.debug('runBlock end');

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function (loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
      /*********************/
      /*var requiredLogin = false;
       // check if this state need login
       if (next.data && next.data.requiredLogin){
       requiredLogin = true;
       }
       // if yes and if this user is not logged in, redirect him to login page
       if (requiredLogin && !Auth.isLoggedIn()) {
       event.preventDefault();
       $location.path('/login');
       }*/
    });


  }

})();
