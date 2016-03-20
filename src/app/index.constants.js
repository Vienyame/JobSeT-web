/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('com.jobset.web')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('SERVER',{
      PORT:':9000',
      HOSTNAME:'http://localhost'
    });

})();
