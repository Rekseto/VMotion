var express = require('express');
var router = express.Router();
var session = require('express-session');
var config = require('../../configs/config');
var sess;

router.get('/contact', function (req, res, next) {
    res.render('contact', {
        title: config.title
    });
});


module.exports = router;
