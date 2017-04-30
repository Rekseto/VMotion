(function () {
    var menu = {
        bindEvenets: function (selector) {
            var menuItems = document.getElementsByClassName(selector);
            for (var i = menuItems.length - 1; i >= 0; i--) {
                menuItems[i].addEventListener('focus', function () {
                        this.parentNode.classList.add('navigation-element-is-focused');
                    });
                menuItems[i].addEventListener('blur', function () {
                    this.parentNode.classList.remove('navigation-element-is-focused');
                })
            }
        }

    }
    menu.bindEvenets('navigation-element-link')
})();


(function () {

})();