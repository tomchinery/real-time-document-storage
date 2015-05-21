var GDocs = angular.module('GDocs', ['ngCookies']);

GDocs.factory('GDocs', function ($http, $routeParams, $cookieStore) {
  var api = {
    fetchDocs: fetchDocs,
  };

  var config = {
    params: {'alt': 'json'},
    headers: {
      'Authorization': 'Bearer ' + $cookieStore.get('token'),
      'GData-Version': '3.0'
    }
  };

  function fetchDocs() {
    return $http.get('https://www.googleapis.com/drive/v2/files', config).then( handleSuccess, handleError );
  }

  function handleSuccess( response ) {
    return response.data;
  }

  function handleError( response ) {
    console.log(response);
    return response.status;
  }

  return api;
});
