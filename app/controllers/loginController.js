rtStorage.controller('loginController', function($scope) {

  $scope.googleLogin = function () {
    var clientID = "822166841586-0l34mn5s7u7egt6bfc8b740fca5qmq7k.apps.googleusercontent.com";
    var driveScope = "https://www.googleapis.com/auth/drive.file";
    var redirectURL = "http://goo.gl/B8AYiZ"; // link shortened to localhost
    var responseType = "token";
    var url =
    "https://accounts.google.com/o/oauth2/auth?scope=" + driveScope +
    "&client_id=" + clientID + "&response_type=" + responseType +
    "&redirect_uri=" + redirectURL;

    // redirect page to oAuth url
    window.location.replace(url);
  };

  ///access_token=ya29.eQGIM7mMzpF6R9wJqnkU1_JvrO7_dpeVWO5kKDcqjJUfWHjiRldM7BBGWqRVqZTyveimeEH4H9cJ_g&token_type=Bearer&expires_in=3600

});
