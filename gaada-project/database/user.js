const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
        loggedin: Boolean,
        image: String,
        description: String,
    }
);
    

const User = mongoose.model('User', UserSchema);
        
module.exports = User;