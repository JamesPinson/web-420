/*
============================================
; Title:  api-catalog.js
; Author: James Pinson
; Date: March 30th 2021
; Description: This sets up our catalog file. 
;===========================================
*/

//This sets up our require statements.
var express = require('express');
var router = express.Router();

//This requires the path for the auth_controller.
var auth_controller = require('../controllers/authController');

//This is the POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//This is the GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;