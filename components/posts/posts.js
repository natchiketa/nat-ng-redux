import angular from 'angular';
import template from './posts.html';

import './posts.scss';

function PostsController() {
}

var posts = {
  controller: PostsController,
  template: template,
  bindings: {
    posts: '=',
  }
};

export default angular.module('async.components.posts', [])
  .component('ngrPosts', posts)
  .name;
