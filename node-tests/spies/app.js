var db = require('./db');


module.exports.handleSignup = (email, password) => {
    //Check if email is unique
    db.saveUser({email, password});
    //Send welcome email
};