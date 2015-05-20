rtStorage.controller('loginController', function($scope, OAuth) {

  $scope.googleLogin = function () {
    OAuth.authURL();
  };

  $scope.dropboxLogin = function () {
    OAuth.auth_dropbox();
  };

});
