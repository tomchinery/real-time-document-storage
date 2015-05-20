rtStorage.controller('loginController', function($scope, OAuth, $cookieStore, $http) {

  $scope.login = function () {
    OAuth.auth(
      $scope.fetchDocs()
    );
  };

  $scope.fetchDocs = function () {
    var config = {
      params: {'alt': 'json'},
      headers: {
        'Authorization': 'Bearer ' + $cookieStore.get('token'),
        'GData-Version': '3.0'
      }
    };

    $http.get('https://www.googleapis.com/drive/v2/files', config).success(function (docs) {
      console.log(docs);
    }).error(function (error) {
      console.log(error);
    });

  };

  ///access_token=ya29.eQGIM7mMzpF6R9wJqnkU1_JvrO7_dpeVWO5kKDcqjJUfWHjiRldM7BBGWqRVqZTyveimeEH4H9cJ_g&token_type=Bearer&expires_in=3600
});
