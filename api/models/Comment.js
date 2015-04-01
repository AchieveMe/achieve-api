"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	text: String,
	achieve: {
		type: String,
		ref: "Achieve"
	}
	author: {
		type: String,
		ref: "User"
	}
});

mongoose.model('Comment', CommentSchema);