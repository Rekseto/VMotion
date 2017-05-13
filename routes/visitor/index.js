const express = require('express');
const router = express.Router();

const config = require('../../configs/config');
const articleController = require('../../controllers/articleController');
const articlesController = require('../../controllers/articlesController');

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
