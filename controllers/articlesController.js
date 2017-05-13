
let ArticlesController = {

    getPages: function (articles, perPage) {
        let articlesLength = articles.length;
        let pagePagination = perPage;
        let paginated = articlesLength / pagePagination;
        return Math.ceil(paginated);
    },
    getPaginatedSite: function (page, perPage, articles) {

        let pagePagination = perPage;
        let firstIndexOnPage = page * pagePagination - 5;
        let lastIndexOnPage = page * pagePagination;
        return articles.slice(firstIndexOnPage, lastIndexOnPage);
    }

}
module.exports = ArticlesController;