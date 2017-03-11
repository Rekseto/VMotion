var express = require('express');
var router = express.Router();
var session = require('express-session');
var loginController = require('../../controllers/adminController');
var articleController = require('../../controllers/articleController');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var mkdirp = require('mkdirp');
var sess;
var mongoose = require('mongoose');
router.get('/admin/article', function (req, res, next) {
    sess = req.session;
    if (loginController.checkSession(req)) {
        res.render('admin/article', {
            title: config.title
        });
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }

});

router.post('/admin/article', function (req, res, next) {
    sess = req.session;
    if (loginController.checkSession(req)) {
        var form = new formidable.IncomingForm();
        form.multiples = true;
        form.uploadDir = "./public/uploads";
        form.keepExtensions = true;
        form.parse(req, function (err, fields, files) {
            if (fields.title.length < 120 || fields.content.length < 1000000) {
                mkdirp(form.uploadDir + '/' + fields.title);
                articleController.addArticle(fields.title, fields.author, fields.tags, fields.content, files.picture.name)
                fs.rename(files.picture.path, "./public/uploads" + '/' + fields.title + '/' + files.picture.name);
                res.redirect('/admin');
            }
        });
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }

});

module.exports = router;