//import 'babel-core/polyfill';
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import asyncService from './actions/asyncService';
import asyncApp from './containers/app';
import components from './components';
import uiRouter from "angular-ui-router";

angular.module('async', [ngRedux, uiRouter, components, asyncApp])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(
      rootReducer,
      [thunk, createLogger()], // Middlewares
      [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()] // Enhancers
    );
  })
  .service('AsyncActions', asyncService)
