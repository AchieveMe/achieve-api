var mongoose = require('mongoose');
var Q        = require('q');
var settings = require('settings');

module.exports = {
  init: init
};

function init() {
  return Q.Promise(initHandler);
}

function initHandler(resolve, reject) {
  mongoose.connect(settings.db.url, function mongooseConnect(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
}
