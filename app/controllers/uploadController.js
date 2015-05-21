rtStorage.controller('uploadController', function($scope, OAuth, GDocs) {

  $scope.upload = function () {

    console.log($scope.file);

    GDocs.uploadFile( $scope.file ).then(function (resp) {
      console.log(resp);
    });
  };

});
