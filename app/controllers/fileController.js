rtStorage.controller('fileController', function($scope, $location, OAuth) {

  $scope.checkAuth = function() {
    if ( OAuth.validAuth() ) {
      $location.url('/files');
    } else {
      $location.url('/');
    }
  };

  

  $scope.checkAuth();

});
