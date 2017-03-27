var showdown = require('showdown');
var markdownUtil = {
    renderMarkdown: function (marked) {
        var converter = new showdown.Converter();
        return converter.makeHtml(marked);
    }


}
// exports
module.exports = markdownUtil;