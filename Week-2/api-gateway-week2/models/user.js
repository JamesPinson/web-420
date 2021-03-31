/*
============================================
; Title:  user.js
; Author: James Pinson
; Date: March 30th 2021
; Description: This sets up our user.js file. 
;===========================================
*/

//This shows we are requiring mongoose.
var mongoose= require('mongoose');

//This sets up the schema we are using for the database. 
var userSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    email: String
});

//This exports our module to form our mongoose model. 
module.exports = mongoose.model('User', userSchema);