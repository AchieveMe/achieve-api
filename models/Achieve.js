"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Achieve = new Schema({
	content: {
		type: String,
		required: true,
		validate = validator.validate('isLength', 2, 255)
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	createdAt: {
		type: Number,
		default: Date.now
	}
});


module.exports = mongoose.model('Achieve', Achieve);