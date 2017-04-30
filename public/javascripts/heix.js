(function () {
})();

var heix = {
    routes: [],
    /**
     * @func heix#addRoute
     * @desc registring EventListener click for all of elements from selector to change url by History API.
     * @param {_selector} selector='body' - CSS Selector
     * @param {Function} callback
     *  (function() { heix.addRoute('data', '.navigation-list-element-link', function (route) { console.log(route.mode)});})();
     */
    addRoute: function (_path, _selector, _next) {
        // use waff-query for this
        var list = waff.qq(_selector);
        for (i = 0; i < list.length; ++i) {
            var element = list[i];
            var data = element.attr('data-name');
            var route = {path: data, selector: _selector, next: _next};

            this.routes.push(route);

            element.on('click', function (e) {

                history.pushState(null, null, this.attr('data-name'));
                e.preventDefault();
                // bind route as `this` in callback
                route.next.call({path: this.attr('data-name'), selector: _selector, next: _next});


            });


        }

    },
    initRouter: function () {
        var path = location.pathname.substr(1);
        document.addEventListener("DOMContentLoaded", function (event) {
            for (i = 0; i < heix.routes.length; i++) {
                if (heix.routes[i].path === path) {
                    heix.routes[i].next.call(heix.routes[i]);
                }
            }

        });
    }

}
