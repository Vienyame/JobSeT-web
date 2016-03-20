(function () {
  'use strict';

  angular
    .module('com.jobset.web')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(socket, $scope,$log, $timeout, webDevTec, toastr,MainService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1458252060177;
    vm.showToastr = showToastr;


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    vm.getThings = function() {
      MainService.getThings()
        .then(function (awesomeThings) {
          vm.awesomeThings = awesomeThings;
          $log.debug(vm.awesomeThings);
          socket.syncUpdates('thing', vm.awesomeThings);
        });
    };
    vm.getThings();

    vm.getColor = function ($index) {
      var _d = ($index + 1) % 11;
      var bg = '';

      switch (_d) {
        case 1:
          bg = 'red';
          break;
        case 2:
          bg = 'green';
          break;
        case 3:
          bg = 'darkBlue';
          break;
        case 4:
          bg = 'blue';
          break;
        case 5:
          bg = 'yellow';
          break;
        case 6:
          bg = 'pink';
          break;
        case 7:
          bg = 'darkBlue';
          break;
        case 8:
          bg = 'purple';
          break;
        case 9:
          bg = 'deepBlue';
          break;
        case 10:
          bg = 'lightPurple';
          break;
        default:
          bg = 'yellow';
          break;
      }

      return bg;
    };

    vm.getSpan = function ($index) {
      var _d = ($index + 1) % 11;

      if (_d === 1 || _d === 5) {
        return 2;
      }
    };

    vm.deleteThing = function (thing) {
      MainService.deleteThings(thing);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  }
})();
