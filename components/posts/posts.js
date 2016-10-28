import angular from 'angular';
import template from './posts.html';

function posts() {
  return {
    restrict: 'E',
    controllerAs: 'posts',
    controller: PostsController,
    template: template,
    scope: {
      posts: '=',
    },
    bindToController: true
  };
}

function PostsController() {
}

export default angular.module('async.components.posts', [])
  .directive('ngrPosts', posts)
  .name;
