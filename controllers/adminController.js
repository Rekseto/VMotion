var config = require('../configs/config');
var adminController = {
    authorize: function (req, next) {
        if (req.body.username === config.user & req.body.password === config.password) {
            sess = req.session;
            sess.username = req.body.username;
            sess.password = req.body.password;
            return true;
        }
        else {
            return false;
        }
    },
    checkSession: function (req) {
        sess = req.session;
        if (sess.username) {
            return true;
        }
        else {
            return false;
        }
    }
}

//exports
module.exports = adminController;