import angular from 'angular';
import picker from './picker/picker.js';
import posts from './posts/posts.js';

export default angular
  .module('async.components', [picker, posts])
  .name;
