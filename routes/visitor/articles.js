const express = require('express');
const router = express.Router();

const articleController = require('../../controllers/articleController');
const articlesController = require('../../controllers/articlesController');
const config = require('../../configs/config');

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
