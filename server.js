
var express = require('express'),       // call express
	app = express(),                 // define our app using express
	bodyParser = require('body-parser'),
	router = require('./src/router');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/config', function(req, res) {
	res.json(config);   
});



// Configure our application level routes
router.configure(app);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Ready on port ' + port);