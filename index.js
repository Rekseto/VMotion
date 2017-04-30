// imports
var path = require('path');
var express = require('express');
var config = require('./configs/config');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// routers import
var index = require(path.join(__dirname, 'routes/visitor/index'));
var test = require(path.join(__dirname, 'routes/visitor/test'));
var contact = require(path.join(__dirname, 'routes/visitor/contact'));
var article = require(path.join(__dirname, 'routes/visitor/articleSite'));
var articles = require(path.join(__dirname, 'routes/visitor/articles'));

var login = require(path.join(__dirname, 'routes/admin/login'));
var logout = require(path.join(__dirname, 'routes/admin/logout'));
var articleAdmin = require(path.join(__dirname, 'routes/admin/article'));

var whatsNew = require(path.join(__dirname,'routes/api/whatsNew'));



var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'MySecret'}));
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(config.db_connect);
// routing
app.use(test);
app.use(index);
app.use(contact);
app.use(article);
app.use(articles);
app.use(login);
app.use(logout);
app.use(articleAdmin);

app.use(whatsNew);



module.exports = app;
