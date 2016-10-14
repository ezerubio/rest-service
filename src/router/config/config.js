'use strict';

var config = require('../../../config/config');

module.exports.getConfig = function(req, res) {
	res.json(config);	
};

