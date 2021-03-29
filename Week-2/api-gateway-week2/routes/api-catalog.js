var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/authController');

//This is the POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//This is the GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;