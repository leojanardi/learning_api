var express = require('express');
var app = express();

//Routes
const indexRoute = require('./routes/route');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


//Porta que meu projeto irá rodar
app.listen(4000);

//Register Routes
app.use('/', indexRoute);

module.exports = app;



