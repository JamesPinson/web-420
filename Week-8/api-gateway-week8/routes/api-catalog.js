/*
============================================
; Title:  api-catalog.js
; Author: James Pinson
; Date: April 20th 2021
; Description: This sets up our catalog file. 
;===========================================
*/

//This sets up our require statements.
var express = require('express');
var router = express.Router();
var checkToken = require('../check-token');

//This requires the path for the auth_controller.
var auth_controller = require('../controllers/authController');

//This is the POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//This is the GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

//This is the post request that allows an existing user to login.
router.post('/auth/login', auth_controller.user_login);

//This is the get request that allows a user to logout. 
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;