var env = process.env.NODE_ENV;
var settings;

switch (env) {
  case 'production':
    settings = require('settings/production');
    break;
  case 'development':
    settings = require('settings/development');
    break;
  default:
    throw new Error('NODE_ENV is not set');
    process.exit(1);
}

module.exports = settings;
