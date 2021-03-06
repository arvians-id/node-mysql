require('dotenv').config();

// HTTP
const createError = require('http-errors');

// Express
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Config
const initializePassport = require('./config/passport');
initializePassport(passport);

const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie Parser
app.use(cookieParser());

// Flash Message
app.use(flash());

// Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  }),
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Method
app.use(methodOverride('_method'));

// CSRF Middleware and Global Variable
app.use(csrf({ cookie: true }));
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.locals.csrfToken = req.csrfToken();
  res.locals.post = req.flash('post')[0] || '';
  res.locals.messages = req.flash();
  res.locals.user = req.user;
  
  next();
})

// Routes
require('./routes')(app, passport);
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.messageSystem = err.message;
  res.locals.errorSystem = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('errors/error');
});

module.exports = app;
