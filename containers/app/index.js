import angular from 'angular';

function app() {
  return {
    restrict: 'E',
    controllerAs: 'app',
    controller: AppController,
    template: require('./app.html'),
    scope: {}
  };
}


export default angular.module('async.app', [])
  .directive('ngrAsync', app)
  .name;

