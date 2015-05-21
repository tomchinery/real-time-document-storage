rtStorage.controller('uploadController', function($scope, OAuth, GDocs) {

  $scope.uploader = '';

  $scope.file = {};

  $scope.upload = function ( file ) {
    console.log($scope.file);
    // GDocs.uploadFile( $scope.file ).then(function (resp) {
    //   console.log(resp);
    // });
  };

});
