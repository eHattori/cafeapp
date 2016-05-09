//Initialize the express framework
var express    = require('express'),
 	consign    = require('consign'),
	cors	   = require('cors'),
 	bodyParser = require('body-parser');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

consign()
.then('config')
.then('modules/models')
.then('modules/controllers')
.then('routes')
.into(app);

/**
	Start the server
*/
 app.listen(8000, function(){
 	console.log("API CafeAPP in the air");
 });

module.exports = app;

