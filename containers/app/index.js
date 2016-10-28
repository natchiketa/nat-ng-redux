import angular from 'angular';
import AppDirective from './app.directive';
import AppRoutes from './app.routes';

export default angular.module('async.containers.app', [])
  .config(AppRoutes)
  .directive('ngrAsync', AppDirective)
  .name;

