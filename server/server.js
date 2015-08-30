// create and implement the RESTful api
var express = require('express'), // call express
    path = require('path'),
    app = express(), // define our app using express
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'dist')))
console.log(path.join(__dirname, 'dist'))
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
require('./routes')(router);

// all of our routes will be prefixed with /api
app.use('/api', router);

// start listening for requests 
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});