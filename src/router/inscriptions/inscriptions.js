'use strict';
require('../../models/inscription')
var inscriptions = [],
	config = require('../../../config/config'),
	mongoose = require('mongoose'),
	Inscription = mongoose.model('Inscription');


module.exports.list = function(req, res) {
	Inscription.find({}, function(err, inscriptions) {
		if(err) {
			res.status(500);	
		} else {
			res.json(inscriptions);			
		}
	});
	
};

module.exports.save = function(req, res) {
	var inscription = {},
		isValid = true;
	config.fields.forEach(function(field) {
		var value = req.body[field.name];
		
		if(field.isRequired && !value) {
			isValid = false;
		}
		if(field.regexp) {
			isValid = new RegExp(field.regexp).test(value);
		}

		inscription[field.name] = value;
	});
	if(isValid) {
		inscription = new Inscription(inscription);
		inscription.save(function(err) {
			if(err) {
				res.status(500);
			} else {
				res.json({status: 200});
			}
		});
		
	} else {
		res.status(400).json({error: "Bad request."});
	}
};