var express = require('express');
var router = express.Router();
var session = require('express-session');
var Article = require('../../models/Article');
var sess;

router.get('/', function (req, res, next) {
    res.render('index', {
        title: config.title
    });
});


module.exports = router;
