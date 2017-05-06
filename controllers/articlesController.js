var articleController = require('./articleController');

var ArticlesController = {

    getPages: function (articles, perPage) {
        var articlesLength = articles.length;
        var pagePagination = perPage;
        var paginated = articlesLength / pagePagination;
        return Math.ceil(paginated);
    },
    getPaginatedSite: function (page, perPage, articles) {

        var pagePagination = perPage;
        var firstIndexOnPage = page * pagePagination - 5;
        var lastIndexOnPage = page * pagePagination;
        return articles.slice(firstIndexOnPage, lastIndexOnPage);
    }

}
module.exports = ArticlesController;