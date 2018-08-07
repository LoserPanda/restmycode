const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
//const config = require('./dbconfig');
//const kaniinit = require('./test');
//const database = 'mongodb://localhost:27017/test';

mongoose.connect(database);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoose.connect(DB, {useNewUrlParser: true}).then(() => {
//         console.log('Database is connected')
//     },
//     err => {
//         console.log('Can not connect to the database' + err)
//     });

router.route("/")
    .get((req, res) => {
        //     kaniinit.find({}).toArray().then((err, results) => {
        //         console.log(res.json(results));
        //         res.json(results)
        //     })
        //         .catch(err => {
        //             console.log(err);
        //             res.status(404);
        //         });
        //     console.log("GET/SCHEIXZE");
        // });
        kaniinit.find({}).toArray().then((result) => {
            console.log(res);
            res.json(result);
        }).catch(function (err) {
            console.log(err.stack);
        });
    });
//     .post('/quotes', (req, res) => {
//         const quote = new Quote(req.body);
//         quote.save()
//             .then(quote => {
//                 res.status(200).redirect("/");
//             })
//             .catch(err => {
//                 res.status(400).send('unable to save the course into database');
//             });
//     });
// .
// get('/list', (req, res) => {
//     Quote.find().sort({name: 'asc'}).exec(function (err, quotes) {
//         // res.json(quotes);
//         res.render('index.ejs', {quotes: quotes});
//     });
// });
//
// router.route.get('/list/:_id', (req, res) => {
//     Quote.findById(req.params._id, function (err, quote) {
//         res.json(quote);
//     });
// });


module.exports = router;
