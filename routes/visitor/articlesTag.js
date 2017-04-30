var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/articleController');
var articlesController = require('../../controllers/articlesController');
var config = require('../../configs/config');
router.get('/articles/:tag', function (req, res, next) {
    articleController.findAllArticlesByTag(req.params.tag).then(function (result) {
        res.render('articles', {
            title: config.title,
            pages : articlesController.getPages(result,config.perPage),
            articles: articlesController.getPaginatedSite(1,config.perPage,result),
        });
    });

});


module.exports = router;
