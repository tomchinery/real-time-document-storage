rtStorage.controller('uploadController', function($scope, OAuth, GDocs) {

  $scope.uploading = false;
  $scope.showError = false;

  $scope.upload = function () {

    if ( $scope.file ) {

      $scope.uploading = true;

      $scope.checkFileName();

      // GDocs.uploadFile( $scope.file, $scope.fileName ).then(function (resp) {
      //   console.log(resp);
      //   console.log('SUCCESS!!!');
      // });
    }
  };

  $scope.checkFileName = function () {

    var ext = $scope.file.name.split('.');

    if ( $scope.fileName == null ) {
      $scope.fileName = $scope.file.name;
    }

    if ( $scope.fileName.split('.').length <= 1 ) {
      $scope.fileName = $scope.fileName + '.' + ext[1];
    } else if ( $scope.fileName.split('.').indexOf(ext[1]) == -1 ) {
      $scope.showError = true;
    }

  };

});
