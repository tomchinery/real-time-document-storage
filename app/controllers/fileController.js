rtStorage.controller('fileController', function($scope, $location, OAuth, GDocs, $interval, $route) {

  $scope.files = '';
  $scope.loaded = '';
  $scope.loading = true;

  $scope.checkAuth = function() {
    if ( !OAuth.validAuth() ) {
      $location.path('/');
    }
  };

  $scope.fileListing = function () {
    $scope.loading = true;

    GDocs.fetchFiles().then(function (resp) {

      $scope.files = resp.items;

      if (resp.error != null) {
        $location.path('/');
      }

    }).finally(function () {
      $scope.loaded = new Date;
      $scope.loading = false;
    });
  };

  $scope.delete = function ( id ) {
    var youSure = confirm('Are you sure you want to delete this file?');

    if ( youSure ) {
      GDocs.deleteFile( id ).then(function () {
        $scope.fileListing();
      });
    }
  };

  $scope.$on('uploaded', function(event, data) { // refresh files when upload completes
    $scope.fileListing();
  });

  $scope.checkAuth(); // check user is authenticated
  $scope.fileListing();

  $interval($scope.fileListing, 10000); // nearest to realtime data without using feeds

});
