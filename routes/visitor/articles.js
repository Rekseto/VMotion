var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/articleController');
var articlesController = require('../../controllers/articlesController');
var config = require('../../configs/config');
router.get('/articles/:page', function (req, res, next) {
    articleController.findAllArticles(req.params.id).then(function (result) {
        res.render('articles', {
            title: config.title,
            pages: articlesController.getPages(result, config.perPage),
            articles: articlesController.getPaginatedSite(req.params.page, config.perPage, result),
            active: req.params.page
        });
    });

});


module.exports = router;
