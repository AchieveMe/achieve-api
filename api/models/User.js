"user strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('../lib/validator');

var UserSchema = new Schema({
	email: {
		type: String,
    	required: true,
    	unique: true,
    	validate: validator.validate('isEmail')
	},
	password: String
});

mongoose.model('User', UserSchema);