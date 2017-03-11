var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get('/admin/logout', function (req, res, next) {
    req.session.destroy();
    res.redirect("/login")
});

module.exports = router;
