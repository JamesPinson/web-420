/*
============================================
; Title:  index.js
; Author: James Pinson
; Date: March 30th 2021
; Description: This is our index.js file. 
;===========================================
*/

//This is the require statements for express and the router. 
var express = require('express');
var router = express.Router();

//This is the get request for our homepage.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
