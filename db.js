var mongoose = require('mongoose');
var settings = require('settings');

module.exports = {
  init: init
};

function init() {
  return new Promise(dbInitPromise);
}

function dbInitPromise(resolve, reject) {
  mongoose.connect(settings.db.url, function mongooseConnect(err) {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
}
