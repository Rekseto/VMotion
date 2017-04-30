var express = require('express');
var router = express.Router();
var session = require('express-session');
var config = require('../../configs/config');
var articleController = require('../../controllers/articleController');
var articlesController = require('../../controllers/articlesController');
var sess;

router.get('/', function (req, res, next) {
    articleController.findAllArticles().then(function (result) {
        res.render('articles', {
            title: config.title,
            pages: articlesController.getPages(result, config.perPage),
            articles: articlesController.getPaginatedSite(1, config.perPage, result),
            active: '1'
        });
    });
});


module.exports = router;
