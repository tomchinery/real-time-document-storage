rtStorage.controller('fileController', function($scope, $location, OAuth, GDocs, $interval) {

  $scope.documents = '';

  $scope.checkAuth = function() {
    OAuth.auth();
    if ( OAuth.validAuth() ) {
      $location.url('/files');
    } else {
      $location.url('/');
    }
  };

  $scope.docListing = function () {
    GDocs.fetchDocs().then(function (doc) {
      $scope.documents = doc.items;
      console.log(doc.items);
    });
  };

  $scope.checkAuth();
  $scope.docListing();

  $interval($scope.docListing, 10000); // nearest to realtime data

});
