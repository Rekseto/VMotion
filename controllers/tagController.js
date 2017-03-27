var Tag = require('../models/Tag');
var tagController = {

    addTag: function (title) {
        var tagData = new Tag({
            title: title,
        });
        tagData.save();
    }
}
//exoprts
module.exports = tagController;