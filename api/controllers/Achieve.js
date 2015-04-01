"use strict";

var mongoose = require('mongoose'),
	Achieve = mongoose.model('Achieve'),
	Comment = mongoose.model('Comment'),
	ObjectId = mongoose.Types.ObjectId;

exports.createAchieve = function(req, res, next) {	
	var achieveModel = new Achieve(req.body);
	achieveModel.save(function(err, achieve){	
		if (err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error ocurred: " + err
			});
		} else {
			res.json({
				type: true,
				data: achieve
			}
		});
	}
}

