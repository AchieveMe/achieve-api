"use strict";

exports = {
  notFound: notFound,
  checkVersionAndContentType: checkVersionAndContentType
};

function notFound(req, res) {
  res.status(404);
  res.json({
    error: 'not found',
    url: req.originalUrl
  });
}

function checkVersionAndContentType(req, res, next) {
  var version = '';
  if (req.headers['accept']) {
    version = req.headers['accept'].split('-')[1].split('+')[0];
  }

  req.version = version;
  next();
}


