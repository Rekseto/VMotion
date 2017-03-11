var express = require('express');
var router = express.Router();
var session = require('express-session');
var loginController = require('../../controllers/adminController');

router.get('/login', function (req, res, next) {
    res.render('admin/login', {
        title: config.title
    });
});

router.post('/login', function (req, res, next) {
    if (loginController.authorize(req)) {
        res.redirect('/admin');
    }
    else {
        res.render('failed', {
            message: 'login failed'
        });
    }
});

router.get('/admin', function (req, res, next) {
    if (loginController.checkSession(req)) {
        res.render('admin/admin', {
            title: config.title
        });
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }
});

module.exports = router;
