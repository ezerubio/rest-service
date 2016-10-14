/*
	Application routes index
*/

'use strict';

module.exports.configure = function(app) {

	require('./inscriptions').configure(app);
	require('./config').configure(app);

};