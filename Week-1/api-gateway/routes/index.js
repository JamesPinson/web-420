var express = require('express');
var router = express.Router();

//This is the get request for our homepage.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
