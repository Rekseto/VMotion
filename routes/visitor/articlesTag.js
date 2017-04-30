var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/articleController');
var articlesController = require('../../controllers/articlesController');
var config = require('../../configs/config');

router.get('/tag/:tag/:page', function (req, res, next) {
    articleController.findAllArticlesByTag(req.params.tag).then(function (result) {
        res.render('tags', {
            title: config.title,
            pages : articlesController.getPages(result,config.perPage),
            articles: articlesController.getPaginatedSite(1,config.perPage,result),
            active: req.params.page,
            tag: req.params.tag,

        });
    });

});


module.exports = router;
