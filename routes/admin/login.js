const express = require('express');
const router = express.Router();

const loginController = require('../../controllers/adminController');
const cookieController = require('../../controllers/cookieController');
const config = require('../../configs/config');
const Cookie = require('../../models/Cookie');

router.get('/login', function (req, res, next) {
    res.render('admin/login', {
        title: config.title
    });
});

router.post('/login', function (req, res, next) {
    if (loginController.authorize(req, res, next)) {
        cookieController.createSession(cookieController.generateSession(), res, req).redirect('/admin');
    }
    else {
        res.render('failed', {
            message: 'login failed'
        });
    }
});

router.get('/admin', function (req, res, next) {

    if (loginController.checkSession(req)) {
        Cookie.find({'sessionId': req.cookies.session.toString()}, function (err, result) {
            {
                if (result) {
                    res.render('admin/admin', {
                        title: config.title
                    });
                } else {
                    res.render('failed', {
                        message: 'U must be logged!'
                    });
                }
            }
        });
    } else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }
});
module.exports = router;
