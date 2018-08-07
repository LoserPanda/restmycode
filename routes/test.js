const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kaniinit = new Schema({
    Etunimi: {
        type: String
    },
    Sukunimi: {
        type: String
    }
},{
    collection: 'kaniinit'
});

module.exports = mongoose.model('kaniinit', kaniinit);