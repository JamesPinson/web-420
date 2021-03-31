/*
============================================
; Title:  authController.js
; Author: James Pinson
; Date: March 30th 2021
; Description: This is our authController.js file. 
;===========================================
*/

//This sets up the user variable and connects it to the desired path.
var User = require('../models/user');

//This registers a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

//This verifies a token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};