const User = require('../models/Tag');
const Article = require('../models/Article');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var Entities = require('html-entities').XmlEntities;

var ArticleController = {

    addArticle: function (title, author, tags, content, picture) {
        entities = new Entities();
        const dom = new JSDOM(entities.decode(content));
        var articleData = new Article({
            author: author,
            title: title,
            content: content,
            images: picture,
            tagList: tags,
            created_at: new Date(),
            shavedContent:dom.window.document.querySelector("p").textContent
        });

        articleData.save();
    },
    findArticleById: function (id) {
        return queryPromise = Article.find({_id: id}).exec();
    },
    findAllArticlesByTag: function (tag) {
        return Article.find({tagList: {"$in": ["" + tag]}}).sort({'_id': 1}).exec();
    },
    findAllArticles: function () {
        return Article.find().sort({'_id': 1}).exec();
    },
    removeArticle : function (id,res) {
        "use strict";
        Article.findByIdAndRemove(id,function (err) {
            if(err) console.log('cos');
            else {
                res.redirect('/admin');
            }
        });
    }


}

//exports
module.exports = ArticleController;
