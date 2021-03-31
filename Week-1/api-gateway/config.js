/*
============================================
; Title:  config.js
; Author: James Pinson
; Date: 3/30/2021
; Description: This is our configure javascript page. 
;===========================================
*/

//This sets up our config variable. 
var config = {};


config.web = {};

//This sets the web port to 3000.
config.web.port = process.env.PORT || '3000';


module.exports = config;
