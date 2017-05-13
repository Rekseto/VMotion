const express = require('express');
const router = express.Router();
const config = require('../../configs/config');

router.get('/about', function (req, res, next) {
    res.render('about', {
        title: config.title
    });
});


module.exports = router;
