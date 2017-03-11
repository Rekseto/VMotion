var express = require('express');
var router = express.Router();
var session = require('express-session');
var Article = require('../../models/Article');
var articleController = require('../../controllers/articleController');

router.get('/article/:id', function (req, res, next) {
    articleController.findArticleById(req.params.id).then(function (result) {
        res.render('article', {
            title: config.title,
            articleTitle: result[0].title,
            articleContent: result[0].content,
            title: config.title
        });
    });
});


module.exports = router;
