"use strict";

var validator = require('validator');
var extend = require('extend');
var memoize = require('memoizejs');

//Utilizado o extend para a uniao dos dois objetos em validador customizado
var customValidator = extend({}, validator);

customValidator.validate = function(method) {
	if(!customValidator[method]) {
		throw new Error('metodo de validacao nao existe');
	}

	// recupera um array dos argumentos, exeto o primeiro(o nome do metodo)
  	var args = Array.prototype.slice.call(arguments, 1);

  	return function(value) {
    	return customValidator[method].apply(customValidator, Array.prototype.concat(value, args));
  	};
};

customValidator.validate = memoize(customValidator.validate);

module.exports = customValidator;