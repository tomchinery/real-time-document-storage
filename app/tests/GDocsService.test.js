describe('GDocs Service Test', function () {

  beforeEach(module('GDocs'));

  var GDocs;

  beforeEach( inject(function(_GDocs_, $httpBackend) {
    GDocs = _GDocs_;
    httpBackend = $httpBackend;
  }));

  describe('fetchFiles', function () {
    it('should have fetchFiles method defined', function () {
      expect( GDocs.fetchFiles() ).toBeDefined();
    });

    it('should return files object from Google Docs', function () {
      httpBackend.whenGET("https://www.googleapis.com/drive/v2/files?alt=json").respond({
        "items": [{
          "title": "Test File"
          }]
      });

      GDocs.fetchFiles().then(function (resp) {
        expect( resp.items[0].title ).toEqual("Test File");
      });

      httpBackend.flush();

    });

    it('should return error object if there are errors', function () {
      httpBackend.whenGET("https://www.googleapis.com/drive/v2/files?alt=json").respond(401, '');

      GDocs.fetchFiles().then(function (resp) {
        expect( resp.error ).toBe(401);
      });

      httpBackend.flush();

    });

  });

});
