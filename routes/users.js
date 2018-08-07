const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if (err != null) {
        console.error("Virhe yhteyden avaamisessa!" + err.message);
        throw err;
    }

    const dbo = db.db();
    console.log("Yhteys Mongoon saatu");
    const kokoelmat = dbo.collection('kaniinit');

    router.route('/')
        .get(function (req, res) {
            kokoelmat.find({}).toArray().then((result) => {
                console.log(res);
                res.json(result);
            }).catch(function(err) {
                console.log(err.stack);
            });
        })
        .post((req, res) => {
            //TODO Muokkaa oikeaksi queryt.
            kokoelmat.save(req.body, (err, result) => {
                if (err) return console.log(err);
                console.log('saved to database');
                res.redirect('/')
            })
        })
        .put((req, res) => {
            //TODO Muokkaa oikeaksi
            kokoelmat.findOneAndUpdate({}, {
                $set: {
                    name: req.body.name,
                    borough: req.body.borough
                }
            }, {
                //sort: {_id: -1},
                upsert: true
            }, (err, result) => {
                if (err) return res.send(err)
                res.json(result)
            })
        })
        .delete((req, res) => {
            //TODO Toimii. Täsmennä hakuehto
            kokoelmat.findOneAndDelete({name: req.body.name},
                (err, result) => {
                    if (err) return res.send(500, err);
                    res.send({message: 'Object deleted! Hope you aint gonna miss it..'})
                })
        });

    router.route("/hae/:nimi")
        .get((req, res) => {
            kokoelmat.find({Etunimi: req.params.nimi}).toArray().then((result) => {
                console.log(res);
                res.json(result);
            })
        });
    router.route("/haes/:snimi")
        .get((req, res) => {
            kokoelmat.find({Sukunimi: req.params.snimi}).toArray().then((result) => {
                console.log(res);
                res.json(result);
            })
        })
});


// router.route("/")
//     .get((req, res) => {
//         //     kaniinit.find({}).toArray().then((err, results) => {
//         //         console.log(res.json(results));
//         //         res.json(results)
//         //     })
//         //         .catch(err => {
//         //             console.log(err);
//         //             res.status(404);
//         //         });
//         //     console.log("GET/SCHEIXZE");
//         // });
//         kaniinit.find({}).toArray().then((result) => {
//             console.log(res);
//             res.json(result);
//         }).catch(function (err) {
//             console.log(err.stack);
//         });
//     });
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
