var express = require('express');
var router = express.Router();
var session = require('express-session');
var Article = require('../../models/Article');
var articleController = require('../../controllers/articleController');
var markdownUtil = require('../../utils/markdownUtil');
var config = require('../../configs/config');
var Entities = require('html-entities').XmlEntities;

router.get('/article/:id', function (req, res, next) {
    entities = new Entities();
    articleController.findArticleById(req.params.id).then(function (result) {
        res.render('article', {
            title: config.title,
            articleTitle: result[0].title,
            articleContent: entities.decode(markdownUtil.renderMarkdown(result[0].content)),
            title: config.title
        });
    });
});


module.exports = router;
