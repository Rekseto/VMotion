var markdown = require( "markdown" ).markdown;
var markdownUtil = {
    renderMarkdown: function (marked) {
        return markdown.toHTML(marked);
    }


}
// exports
module.exports = markdownUtil;