rtStorage.controller('loginController', function($scope) {

  $scope.googleLogin = function () {
    var clientID = "";
    var permissions = "";
    var redirectURL = "http://localhost/real-time-document-storage/#/";
    var responseType = "token";
    var url=
    "https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri +
    "&response_type="+response_type;

    // load url
    window.location.replace(url);
  };

});
