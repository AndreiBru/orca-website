var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require('./server/controllers/meetups-controller.js');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());


// ROUTES

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/client/index.html');
});

app.get('/home', function(req, res) {
	res.sendfile(__dirname + '/client/views/home.html');
});

app.get('/despre', function(req, res) {
	res.sendfile(__dirname + '/client/views/despre.html');
});

app.get('/contact', function(req, res) {
	res.sendfile(__dirname + '/client/views/contact.html');
});

app.get('/simulare', function(req, res) {
	res.sendfile(__dirname + '/client/views/simulare.html');
});

app.get('/admitere', function(req, res) {
	res.sendfile(__dirname + '/client/views/admitere.html');
});



app.use('/js', express.static(__dirname + '/client/js'));
app.use('/third', express.static(__dirname + '/bower_components'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/css', express.static(__dirname + '/client/css'));


// REST

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000, function() {
	console.log('I\'m Listening...');
});
