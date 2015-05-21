rtStorage.filter('datetime', function ($filter) {
  return function (date) {
    if ( date == null) {
      return "";
    }

    var _date = $filter('date')(new Date(date), 'dd/MM/yyyy HH:mm:ss a');

    return _date;
  }
});
