const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
// create a schema
let articleSchema = new Schema({
    title: {type: String, required: true, unique: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    tagList: {type: Array, required: true},
    images: [],
    created_at: Date,
    updated_at: Date,
    shavedContent: {type: String,required: true}
});
articleSchema.methods.pushImage = function (item) {
    this.images.push(item);
    return this.images;
};
articleSchema.plugin(autoIncrement.plugin, 'Article');

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;