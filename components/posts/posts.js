import angular from 'angular';

function posts() {
  return {
    restrict: 'E',
    controllerAs: 'posts',
    controller: PostsController,
    template: require('./posts.html'),
    scope: {
      posts: '=',
    },
    bindToController: true
  };
}

class PostsController {
}

export default angular.module('async.components.posts', [])
  .directive('ngrPosts', posts)
  .name;
