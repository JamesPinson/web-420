//This is my require statements. 
var jwt = require('jsonwebtoken');
var config = require('./config');


//This is setting up my checkToken function.
function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    //This is the response if no token was provided. 
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    //This sets my response if there is an error. 
    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

    //If the token is correct then this continues to the next step. 
        req.userId = decoded.id;
        next();
    });
}

//This exports the function. 
module.exports = checkToken;