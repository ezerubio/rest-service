/*
	Inscriptions routes index
*/

'use strict';

var express = require('express'),
	inscriptionHandlers = require('./inscriptions');

module.exports.configure = function (app) {

	var inscriptionsRouter = express.Router();

	
	inscriptionsRouter.get('/inscriptions', inscriptionHandlers.list);
	inscriptionsRouter.post('/inscription', inscriptionHandlers.save);
	

	app.use('/api', inscriptionsRouter);
};
