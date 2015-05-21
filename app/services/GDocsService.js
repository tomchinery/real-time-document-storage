var GDocs = angular.module('GDocs', ['ngCookies']);

GDocs.factory('GDocs', function ($http, $cookieStore) {
  var api = {
    fetchFiles: fetchFiles,
  };

  var config = {
    params: {'alt': 'json'},
    headers: {
      'Authorization': 'Bearer ' + $cookieStore.get('token'),
      'GData-Version': '3.0'
    }
  };

  function fetchFiles() {
    return $http.get('https://www.googleapis.com/drive/v2/files', config).then( handleSuccess, handleError );
  }

  function handleSuccess( response ) {
    return response.data;
  }

  function handleError( response ) {
    var error = {
      "error": response.status,
      "message": "Error: " + response.statusText
    };

    return error;
  }

  return api;
});
