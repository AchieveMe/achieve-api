"use strict";

// Module dependencies
var express = require('express'),  
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    errorHandler = require('errorhandler'),
    routes = require('./routes'),
    config = require('./config.json'),
    db = require('./lib/db');

// Loading middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(cookieParser());
app.use(cookieSession({
  secret: config.sessionSecret,
  cookie: {
    maxAge: config.sessionMaxAge
  }
}));
app.use(flash());

// Declaring application routes
app.use('/', routes);

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

// Establishing database connection and binding application to specified port
db.connect();
app.listen(config.port);
console.log('listening on port %s', config.port);
