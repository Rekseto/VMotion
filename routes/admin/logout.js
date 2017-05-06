var express = require('express');
var router = express.Router();
var Cookie = require('../../models/Cookie');
var cookieController = require('../../controllers/cookieController');


router.get('/admin/logout', function (req, res, next) {
    cookieController.removeCookies();
    res.clearCookie('session');
    res.redirect("/login");

});

module.exports = router;
