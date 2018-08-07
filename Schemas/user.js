const mongoose = require('mongoose');
const User = mongoose.Schema;

var user = new User({
    name: String,
    userId: number,
    password: String
}, {
    collection: 'userdata'
});

module.exports = mongoose.model('user', user);