var User = require('../models/Tag');
var Tag = require('../models/Tag');
var ArticleController = {

    addTag: function (title) {
        var tagData = new Tag({
            title: title,
        });
        tagData.save();
    }
}
//exorts
module.exports = tagController;