/*
============================================
; Title:  API-Gateway
; Author: James Pinson
; Date: March 21 2021
; Description: API-Gateway
;===========================================
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var index = require('./routes/index');

var app = express();

mongoose.connect('mongodb+srv://<username>:<password>@api-gateway.mlvpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
  .catch( (err) => console.log(err));

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', index);

  app.use(function(req, res, next) {
      var err = new error('Not Found');
      err.status = 404;
      next(err);
  });

  app.use(function(err, req, res, next){
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      res.status(err.status || 500);
      res.render('error');
  });

  module.exports = app;