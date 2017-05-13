const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
let cookieSchema = new Schema({
    sessionId: {type: String, required: true}
});

let Cookie = mongoose.model('Cookie', cookieSchema);

module.exports = Cookie;