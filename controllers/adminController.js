const config = require('../configs/config');
const cookieController = require('./cookieController');
const Cookie = require('../models/Cookie');

let adminController = {
    authorize: function (req, next,res) {
        if (req.body.username === config.user & req.body.password === config.password) {
            return true;
        }
        else {
            return  false;
        }
    },
    checkSession: function (req) {
        var session = req.cookies.session
        if (session === undefined) {
            return false;
        }
        else {
            return true;
        }
    },
    destroySession : function () {
        
    }
}

//exports
module.exports = adminController;