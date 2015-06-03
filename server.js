var restify  = require('restify');
var settings = require('settings');

var server;

server = restify.createServer({
  name: 'achieve-api'
});

server
.use(restify.bodyParser())
.use(restify.CORS())
.use(restify.fullResponse())
.use(restify.gzipResponse());

module.exports = {
  init: init
};

function init() {
  return new Promise(serverInitPromise);
}

function serverInitPromise(resolve, reject) {
  server.listen(settings.server.port, function serverInitSuccess() {
    resolve(server);
  })
  .on('error', function serverInitError(err) {
    reject(err);
  });
}
