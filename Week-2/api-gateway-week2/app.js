/*
============================================
; Title:  API-Gateway
; Author: James Pinson
; Date: March 21 2021
; Description: API-Gateway
;===========================================
*/

//This is all of the require statements. 
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var index = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

//This says we are using express to create the app. 
var app = express();

//This sets up the connection to our database.
mongoose.connect('mongodb+srv://JamesPinson:Jimmyp369@api-gateway.mlvpe.mongodb.net/test', {
    promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));


//This sets up the view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//This sets up everything we are using for the app. 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api', apiCatalog);


//This sets up our error handler.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //This renders our error page.
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;