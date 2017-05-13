const Cookie = require('../models/Cookie');

let cookieController =  {
    generateSession : function () {
        let sessionId = Math.floor(Math.random() * 9000) + 1000;
        return sessionId;
    },
    createSession : function (sess,res,req) {
        let cookie = req.cookies.session;
        let cookieData = new Cookie({
            sessionId: sess
        });

        cookieData.save();

        if (cookie === undefined)
        {
            res.cookie('session',sess, { maxAge: 900000, httpOnly: false});
            return res;
        }
        else
        {


            res.clearCookie('session');
            res.cookie('session',sess, { maxAge: 900000, httpOnly: false});
            return res;
        }
    },
    removeCookies : function () {
        Cookie.remove({}, function(err,removed) {
        if(err) console.log(err);
        });
    }


}
module.exports = cookieController;