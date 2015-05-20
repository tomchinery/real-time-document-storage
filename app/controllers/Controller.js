rtStorage.controller('Controller', function($scope, OAuth) {

  $scope.googleLogin = function () {
    OAuth.auth_url();
  };

  $scope.dropboxLogin = function () {
    OAuth.auth_dropbox();
  };

});
