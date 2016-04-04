(function () {
  'use strict';

  angular
    .module('com.jobset.web')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(socket, $scope,$log,MainService) {
    var vm = this;

    vm.enterprises = [];

    vm.getEnterprises = function() {
      MainService.getEnterprises()
        .then(function (enterprises) {
          vm.enterprises = enterprises;
          $log.debug(vm.enterprises);
          socket.syncUpdates('enterprise', vm.enterprises);
        });
    };

    vm.getEnterprises();

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

    vm.deleteEnterprise = function (enterprise) {
      MainService.deleteEnterprises(enterprise);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('enterprise');
    });
  }
})();
