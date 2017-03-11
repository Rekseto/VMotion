var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/articleController');

router.get('/articles', function (req, res, next) {
    articleController.findAllArticles(req.params.id).then(function (result) {
        res.render('articles', {
            title: config.title,
            articles: result
        });
    });

});


module.exports = router;
