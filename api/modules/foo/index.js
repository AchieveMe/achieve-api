var fooController = require('api/modules/foo/controllers/foo.js');

module.exports = {
  setRoutes: setRoutes
};

function setRoutes(server) {
  server.get('/foo', fooController);
}
