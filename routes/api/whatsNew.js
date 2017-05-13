const express = require('express');
const router = express.Router();
const config = require('../../configs/config');
const articleController = require('../../controllers/articleController');

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
