// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console
var bodyParser = require('body-parser'); // pull information from HTTP Post
var methodOverride = require('method-override'); // Simulate DELETE and PUT

// Configuration
mongoose.connect('mongodb://localhost:27017/test');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

// Routing
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});





var Todo = mongoose.model('Todo', {
  text: String
});

app.listen(8080);
console.log('App listening on port 8080');