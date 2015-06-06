var restify  = require('restify');
var settings = require('settings');
var modules  = require('api/modules');

var server;

server = restify.createServer({
  name: 'achieve-api'
});

server
.use(restify.bodyParser())
.use(restify.CORS())
.use(restify.fullResponse())
.use(restify.gzipResponse());

modules.foo.setRoutes(server);

module.exports = {
  init: init,
  close: close
};

function init() {
  return new Promise(initHandler);
}

function initHandler(resolve, reject) {
  server.listen(settings.server.port, function serverInitSuccess() {
    resolve(server);
  })
  .on('error', function serverInitError(err) {
    reject(err);
  });
}

function close() {
  server.close();
}
