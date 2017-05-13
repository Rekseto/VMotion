// imports
const path = require('path');
const express = require('express');
const config = require('./configs/config');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieController = require(path.join(__dirname, 'controllers/cookieController'));
// routers import
const index = require(path.join(__dirname, 'routes/visitor/index'));
const about = require(path.join(__dirname, 'routes/visitor/about'));
const article = require(path.join(__dirname, 'routes/visitor/articleSite'));
const articles = require(path.join(__dirname, 'routes/visitor/articles'));
const articlesTag = require(path.join(__dirname, 'routes/visitor/articlesTag'));

const login = require(path.join(__dirname, 'routes/admin/login'));
const logout = require(path.join(__dirname, 'routes/admin/logout'));
const articleAdmin = require(path.join(__dirname, 'routes/admin/article'));

const whatsNew = require(path.join(__dirname,'routes/api/whatsNew'));



const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

mongoose.connect(config.db_connect);
// routing
app.use(index);
app.use(about);
app.use(article);
app.use(articles);
app.use(articlesTag);
app.use(login);
app.use(logout);
app.use(articleAdmin);

app.use(whatsNew);

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
