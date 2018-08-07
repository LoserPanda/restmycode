const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseautoincrement = require('mongoose-auto-increment');


var user = new Schema({
    _id: new mongoose.Types.ObjectId(),
    name: String,
    password: String
}, {
    collection: 'userdata'
});

module.exports = mongoose.model('User', user);