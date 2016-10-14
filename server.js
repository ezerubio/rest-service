
var express = require('express'),       // call express
	app = express(),                 // define our app using express
	bodyParser = require('body-parser'),
	path = require('path'),
	router = require('./src/router');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;        // set our port

//Activate CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Configure our application level routes
router.configure(app);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Ready on port ' + port);