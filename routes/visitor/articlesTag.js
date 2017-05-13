const express = require('express');
const router = express.Router();

const articleController = require('../../controllers/articleController');
const articlesController = require('../../controllers/articlesController');
const config = require('../../configs/config');

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
