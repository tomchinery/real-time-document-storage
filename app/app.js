var rtStorage = angular.module('rtStorage', ['ngRoute', 'ngAnimate', 'angular-spinkit', 'OAuth', 'ngCookies', 'GDocs', 'angular-loading-bar']);

rtStorage.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'app/views/login.html',
    controller: 'loginController',
  })

  .when('/access_token=:access_token&token_type=:token_type', {
    templateUrl: 'app/views/files.html',
    controller: 'loginController',
  })

  .when('/files', {
    templateUrl: 'app/views/files.html',
    controller: 'fileController',
  })

  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true); // fix OAuth issues with /#/ in url

}]);
