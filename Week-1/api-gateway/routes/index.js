/*
============================================
; Title:  Index.js
; Author: James Pinson
; Date: March 30 2021
; Description: This is our index.js page.
;===========================================
*/

//This is our require statements.
var express = require('express');
var router = express.Router();

//This is the get request for our homepage.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
