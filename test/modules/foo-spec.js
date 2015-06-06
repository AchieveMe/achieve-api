'use strict';

describe('Foo Module', function () {
  var request = require('request');
  var server = require('server.js');

  before(function (done) {
    server.init()
    .then(function () {
      done();
    })
    .catch(function (err) {
      console.error(err);
    });
  });

  after(function () {
    server.close();
  });

  describe('get /foo', function () {
    it('should return "You achieved it! :)"', function (done) {
      request(config.serverUrl + 'foo', function (error, response, body) {
        if (error) {
          throw error;
        }
        expect(body).to.equal('"You achieved it! :)"');
        done();
      });
    });
  });
});
