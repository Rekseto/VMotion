var Article = require('../models/Article');
var ArticleController = {

    addArticle: function (title, author, tags, content, picture) {
        var articleData = new Article({
            author: author,
            title: title,
            content: content,
            images: picture,
            tagList: tags,
            created_at: new Date()
        });
        articleData.save();
    },
    findArticleById: function (id) {
        return queryPromise = Article.find({_id: id}).exec();
    },
    findAllArticlesByTag: function (tag) {

    },
    findAllArticles: function () {
        return Article.find().exec();
    }


}

//exports
module.exports = ArticleController;