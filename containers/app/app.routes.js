export default function AppRoutes($stateProvider) {
  "ngInject";

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        '': {
          template: `<ngr-async></ngr-async>`
        }
      }
    });
}
