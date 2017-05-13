const express = require('express');
const router = express.Router();

const Cookie = require('../../models/Cookie');
const cookieController = require('../../controllers/cookieController');


router.get('/admin/logout', function (req, res, next) {
    cookieController.removeCookies();
    res.clearCookie('session');
    res.redirect("/login");

});

module.exports = router;
