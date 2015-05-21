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
    var url = 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart' + '&access_token=' + $cookieStore.get('token');
    var fd = new FormData();

    var fileConfig = {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    };

    fd.append('metadata', new Blob(['{ "title": "The File" }'], {
      type: 'application/json'
    }));

    fd.append('file', file); // send as form data

    return $http.post(url, fd, fileConfig).then( handleSuccess, handleError );
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
