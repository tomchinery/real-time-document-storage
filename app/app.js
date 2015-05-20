var rtStorage = angular.module('rtStorage', ['ngRoute', 'ngAnimate', 'angular-spinkit', 'OAuth', 'ngCookies', 'GDocs']);

rtStorage.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'app/views/login.html',
    controller: 'loginController',
  })

  .when('/access_token=:access_token&token_type=:token_type', {
    templateUrl: 'app/views/files.html',
    controller: 'fileController',
  })

  .when('/files', {
    templateUrl: 'app/views/files.html',
    controller: 'fileController',
  })

  .otherwise({
    redirectTo: '/'
  });

}]);
