var rtStorage = angular.module('rtStorage', ['ngRoute', 'ngAnimate', 'angular-spinkit', 'OAuth', 'ngCookies']);

rtStorage.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/login.html',
    controller: 'Controller',
  }).when('/access_token=:access_token&token_type=:token_type', {
    templateUrl: 'app/views/files.html',
    controller: 'loginController',
  });
}]);
