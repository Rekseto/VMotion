var express = require('express');
var router = express.Router();
var session = require('express-session');
var config = require('../../configs/config');
var articleController = require('../../controllers/articleController');

router.get('/api/whatsnew', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/api/whatsnew', function(req, res, next) {
    articleController.findAllArticles().then(function (result) {
        res.send(JSON.stringify(result[result.length - 1]));
    })
});


module.exports = router;
