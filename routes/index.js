var express = require('express');
var router = express.Router();
var path = require('path');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* GET home page. */
router.get('/', function (req, res, next) {
    const imgId = getRandomInt(3);
    const src = `/images/${imgId}.png`;

    res.sendFile(src, {
        root: path.join(__dirname, '../public'),
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: ', src);
        }
    })
    // res.render('index', { title: 'Express' });
});

module.exports = router;
