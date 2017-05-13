const express = require('express');
const router = express.Router();

const Article = require('../../models/Article');
const articleController = require('../../controllers/articleController');
const markdownUtil = require('../../utils/markdownUtil');
const config = require('../../configs/config');

const Entities = require('html-entities').XmlEntities;

router.get('/article/:id', function (req, res, next) {
    entities = new Entities();
    articleController.findArticleById(req.params.id).then(function (result) {
        res.render('article', {
            title: config.title,
            articleTitle: result[0].title,
            articleContent: entities.decode(result[0].content),
            title: config.title
        });
    });
});


module.exports = router;
