var express = require('express');
var cors = require('cors')
var app = express();

//Routes
const indexRoute = require('./routes/route');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


//Porta que meu projeto irá rodar
var server = app.listen(4000, function() {
  console.log('Listening on port %d', server.address().port);
});

//Register Routes
app.use(cors())
app.use('/', indexRoute);


module.exports = app;



