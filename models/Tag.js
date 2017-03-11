let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
// create a schema
let tagSchema = new Schema({
    title: {type: String, required: true, unique: true}
});
tagSchema.plugin(autoIncrement.plugin, 'Tag');

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;