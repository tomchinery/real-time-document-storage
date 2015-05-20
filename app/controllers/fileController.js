rtStorage.controller('fileController', function($scope, $routeParams, $http) {
  $scope.token = $routeParams.access_token;

  $scope.response = "nothing";

  $scope.getFiles = function () {
    $http.get('https://www.googleapis.com/drive/v2/files').success(function (response) {
      $scope.response = response;
      console.log(response);
    });
  };

});
