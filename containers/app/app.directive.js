function AppController($ngRedux, $scope, AsyncActions) {
  'ngInject';

  let componentWillReceiveStateAndActions = (nextState, nextActions) => {
    if (nextState.selectedReddit !== this.selectedReddit) {
      nextActions.fetchPostsIfNeeded(nextState.selectedReddit);
    }
  };

  const unsubscribe = $ngRedux.connect(
    mapStateToThis,
    AsyncActions
  )(
  (selectedState, actions) => {
    componentWillReceiveStateAndActions(selectedState, actions);
    Object.assign(this, selectedState, actions);
  }
  );

  this.options = ['angularjs', 'frontend'];
  this.handleChange = handleChange.bind(this);
  this.handleRefreshClick = handleRefreshClick.bind(this);

  this.fetchPostsIfNeeded(this.selectedReddit);
}

function handleChange(nextReddit) {
  this.selectReddit(nextReddit);
}

function handleRefreshClick() {
  this.invalidateReddit(this.selectedReddit);
  this.fetchPostsIfNeeded(this.selectedReddit);
}

// Which part of the Redux global state does our component want to receive?
function mapStateToThis(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
}

export default function app() {
  return {
    restrict: 'E',
    controllerAs: 'app',
    controller: AppController,
    template: require('./app.html'),
    scope: {}
  };
}
