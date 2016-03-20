(function () {
    'use strict';

    angular
        .module('com.jobset.shell')
        .controller('DialogController', DialogController);

    /** @ngInject **/
    function DialogController($mdDialog, DialogService) {
        var vm = this;

        vm.closeDialog = function () {
            $mdDialog.hide();
        };

        vm.addThing = function () {
            if (vm.newThing === '') {
                return;
            }
            DialogService.postThings(vm.newThing);
            vm.newThing = '';
            $mdDialog.hide();
        };
    }
})();
