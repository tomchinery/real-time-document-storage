var rtStorage = angular.module('rtStorage', ['ngRoute', 'ngAnimate', 'angular-spinkit']);

rtStorage.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/login.html',
    controller: 'loginController'
  });
}]);
