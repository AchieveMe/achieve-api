"use strict";

var restify = require('restify');
var fs = require('fs');
var config = require('./config.json'),
    db = require('./lib/db');

var controllers = {},
	controllers_path = process.cwd() + '/api/controllers'
	fs.readdirSync(controllers_path).forEach(function(file) {
		if(file.indexOf('.js') != -1) {
			controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
		}
	});

var server = restify.createServer();

server
	.use(restify.fullResponse())
	.use(restify.bodyParser());




var port = process.env.PORT || config.port;
server.listen(port, function(err) {
	if(err) 
		console.error(err);
	else 
		console.log("Api is ready at:" + port)
});

if(process.env.environment == 'production'){
	process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    });
}

// Estabelecer conexao com o DB, e fazendo o binding na porta do DB
db.connect();