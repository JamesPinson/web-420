/*
============================================
; Title:  user.js
; Author: James Pinson
; Date: April 11th 2021
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

//This sets up our user based on our model and schema. 
const User = module.exports = mongoose.model('User', userSchema);

//This allows you to add a new user to database.
module.exports.add = (user, callback) => {
    user.save(callback);
}

//This allows you to search the database by id. 
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}