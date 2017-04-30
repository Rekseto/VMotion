var express = require('express');
var router = express.Router();
var config = require('../../configs/config');

router.get('/about', function (req, res, next) {
    res.render('about', {
        title: config.title
    });
});


module.exports = router;
