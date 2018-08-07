const mongoose = require('mongoose');
const mongooseautoincrement = require('mongoose-auto-increment');
const user = require('user');
const Schema = mongoose.Schema;

var datab = new Schema({
    _id: new mongoose.Types.ObjectId(),
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    descript: String,
    lang: String,
    date: Date,
    tags: [String],
    score: number,
    code: String
},{
    collection: 'datafiles'
});

module.exports = mongoose.model('Data', datab);

