/*
============================================
; Title:  config.js
; Author: James Pinson
; Date: March 30th 2021
; Description: This sets up our config.js page.
;===========================================
*/

//This sets up our config variable.
var config = {};

//This sets up the config.web.
config.web = {};

//This is what creates our web port on port 3000.
config.web.port = process.env.PORT || '3000';

//This sets up our secret passcode token.
config.web.secret = 'topsecret';


module.exports = config;