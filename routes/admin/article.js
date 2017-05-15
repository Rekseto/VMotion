var express = require('express');
var router = express.Router();
var loginController = require('../../controllers/adminController');
var articleController = require('../../controllers/articleController');
var escape = require('html-escape');
var Entities = require('html-entities').XmlEntities;
var Article = require('../../models/Article');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var mkdirp = require('mkdirp');
var markdownUtil = require('../../utils/markdownUtil');
var config = require('../../configs/config');
var Cookie = require('../../models/Cookie');
var sess;
var mongoose = require('mongoose');

router.get('/admin/article', function (req, res, next) {
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
  
    if (loginController.checkSession(req)) {
        Cookie.find({'sessionId': req.cookies.session.toString()}, function (err, result) {
            {
                if (result) {
                    var form = new formidable.IncomingForm();
                    form.multiples = true;
                    form.uploadDir = "./public/uploads";
                    form.keepExtensions = true;
                    form.parse(req, function (err, fields, files) {
                        if (fields.title.length < 120 || fields.content.length < 1000000) {
                            Article.nextCount(function (err, count) {
                                if (err) {
                                    mkdirp(form.uploadDir + '/' + count);
                                    fs.rename(files.picture.path, "./public/uploads" + '/' + '0' + '/' + files.picture.name);
                                    articleController.addArticle(fields.title, fields.author, fields.tags, escape(markdownUtil.renderMarkdown(fields.content)), files.picture.name);
                                    res.redirect('/admin');
                                }
                                else {
                                    mkdirp(form.uploadDir + '/' + count);
                                    fs.rename(files.picture.path, "./public/uploads" + '/' + count + '/' + files.picture.name);
                                    articleController.addArticle(fields.title, fields.author, fields.tags.split(','), escape(markdownUtil.renderMarkdown(fields.content)), files.picture.name);
                                    res.redirect('/admin');
                                }
                            });
                        } else {
                            res.render('failed', {
                                message: 'Too long!'
                            });
                        }
                    });
                } else {
                    res.render('failed', {
                        message: 'U must be logged!'
                    });
                }
            }
        });
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }

});

router.get('/admin/removeArticle', function (req, res) {
    if (loginController.checkSession(req)) {
        res.render('admin/removeArticle', {
            title: config.title
        });
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }
});

router.post('/admin/removeArticle',function  (req, res) {
    if (loginController.checkSession(req)) {
         articleController.removeArticle(parseInt(req.body.articleId),res);
    }
    else {
        res.render('failed', {
            message: 'U must be logged!'
        });
    }

});
module.exports = router;
