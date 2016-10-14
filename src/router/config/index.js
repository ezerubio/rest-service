/*
	Config routes index
*/

'use strict';

var express = require('express'),
	configHandlers = require('./config');

module.exports.configure = function (app) {

	var configRouter = express.Router();

	
	configRouter.get('/config', configHandlers.getConfig);
		

	app.use('/api', configRouter);
};
