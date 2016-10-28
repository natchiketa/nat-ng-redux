import angular from 'angular';

function picker() {
  return {
    restrict: 'E',
    controllerAs: 'picker',
    controller: PickerController,
    template: require('./picker.html'),
    scope: {
      options: '=',
      value: '=',
      onChange: '='
    },
    bindToController: true
  };
}

class PickerController {
}

export default angular.module('async.components.picker', [])
  .directive('ngrPicker', picker)
  .name;
