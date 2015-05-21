rtStorage.controller('fileController', function($scope, $location, OAuth, GDocs, $interval, $route) {

  $scope.files = '';

  $scope.checkAuth = function() {
    if ( !OAuth.validAuth() ) {
      $location.path('/');
    }
  };

  $scope.fileListing = function () {
    GDocs.fetchFiles().then(function (resp) {

      $scope.files = resp.items;
      console.log(resp);

      if (resp.error) {
        $location.path('/cheese');
      }

    });
  };

  $scope.checkAuth(); // check user is authenticated
  $scope.fileListing();

  $interval($scope.fileListing, 10000); // nearest to realtime data without using feeds

});
