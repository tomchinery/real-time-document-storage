rtStorage.controller('uploadController', function($scope, OAuth, GDocs) {

  $scope.uploading = false;
  $scope.showNameError = false;
  $scope.showNoFileError = false;

  $scope.upload = function () {

    $scope.showNoFileError = false;

    if ( $scope.file ) {


      $scope.checkFileName();

      if ( !$scope.showNameError ) {
        $scope.uploading = true;

        GDocs.uploadFile( $scope.file, $scope.fileName ).then(function (resp) {
          $scope.$emit('uploaded', 'refresh'); // emit uploaded event
        }).finally(function () {
          $scope.uploading = false;
        });
      }

    } else {
      $scope.showNoFileError = true;
    }
  };

  $scope.checkFileName = function () {

    $scope.showNameError = false;

    var ext = $scope.file.name.split('.');

    if ( $scope.fileName == null ) {
      $scope.fileName = $scope.file.name;
    }

    if ( $scope.fileName.split('.').length <= 1 ) {
      $scope.fileName = $scope.fileName + '.' + ext[1];
    } else if ( $scope.fileName.split('.').indexOf(ext[1]) == -1 ) {
      $scope.fileName = $scope.file.name;
      $scope.showNameError = true;
    }

  };

});
