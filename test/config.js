require('app-module-path')
.addPath(require('path').resolve('.'));

var settings = require('settings');

global.expect = require('chai').expect;

global.config = {
  serverUrl: 'http://localhost:' + settings.server.port + '/'
};

