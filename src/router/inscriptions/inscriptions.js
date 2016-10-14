'use strict';

var inscriptions = [],
	config = require('../../../config/config');

module.exports.list = function(req, res) {
	res.json(inscriptions);	
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
		//saved in memory can change to a mongodb
		inscriptions.push(inscription);
		res.json({status: 200});
	} else {
		res.status(400).json({error: "Bad request."});
	}
};