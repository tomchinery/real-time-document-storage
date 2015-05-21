var GDocs = angular.module('GDocs', ['ngCookies']);

GDocs.factory('GDocs', function ($http, $cookieStore) {
  var api = {
    fetchFiles: fetchFiles,
    uploadFile: uploadFile,
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

  function uploadFile( file ) {
    return $http.post('https://www.googleapis.com/drive/v2/files?uploadType=multipart' + '&access_token=' + $cookieStore.get('token'), file).then( handleSuccess, handleError );
  }

  function handleSuccess( response ) {
    console.log(response);
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
