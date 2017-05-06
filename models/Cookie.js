let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// create a schema
let cookieSchema = new Schema({
    sessionId: {type: String, required: true}
});

var Cookie = mongoose.model('Cookie', cookieSchema);

module.exports = Cookie;