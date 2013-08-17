angular.module( 'creatrs', [
  'templates-app',
  'templates-common',
  'creatrs.home',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | creatrs' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

