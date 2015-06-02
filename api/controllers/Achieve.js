"use strict";

var mongoose = require('mongoose');
var Achieve  = require('../models/Achieve.js');

// mongoose.model('Achieve');

// var Comment  = mongoose.model('Comment');
// var ObjectId = mongoose.Types.ObjectId;

exports.createAchieve = createAchieve;

function createAchieve(req, res, next) {

  var achieveModel = new Achieve(req.body);

  achieveModel.save(function achieveModelSave(err, achieve) {
    if (err) {
      res.status(500);

      res.json({
        type: false,
        data: 'Error ocurred: ' + err
      });
    }
    return;

    res.json({
      type: true,
      data: achieve
    });

  });
}
