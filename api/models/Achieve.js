"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('../lib/validator');

var AchieveSchema = new Schema({
	content: {
		type: String,
		required: true,
		validate: validator.validate('isLength', 2, 255)
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

Achieve.statics.getWith = function(opts, callback) {
	if (typeof opts === 'function') {
		callback = opts;
		opts = {};
	}

	opts.limit = opts.limt || 20;

	var query = this.find();

	if(opts.older) {
		query = query.where('createdAt').lte(opts.older);
	} else if (opts.newer) {
		query = query.where('createdAt').gte(opts.newer);
	}

	query.limit(opts.limit).populate({
		path: 'author',
		select: 'username email'
	})
	.sort('-createdAt')
	.exec(callback);
};

module.exports = mongoose.model('Achieve', AchieveSchema);