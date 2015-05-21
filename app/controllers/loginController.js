rtStorage.controller('loginController', function($scope, OAuth, $cookieStore, $location, $interval) {

  $scope.setAuthCookie = function () {
    OAuth.auth(function () {
      $location.path('/files');
    });
  };

  $scope.googleLogin = function () {
    OAuth.authURL();
  };

  $scope.dropboxLogin = function () {
    OAuth.auth_dropbox();
  };

  $scope.setAuthCookie();

});
