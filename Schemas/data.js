const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var datab = new Schema({
    userId: number,
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

module.exports = mongoose.model('data', datab);