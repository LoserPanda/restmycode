const mongoose = require('mongoose');
const User = mongoose.Schema;
const mongooseautoincrement = require('mongoose-auto-increment');


var user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: String,
    password: String
}, {
    collection: 'userdata'
});

module.exports = mongoose.model('user', user);