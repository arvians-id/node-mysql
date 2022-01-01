const router = require('express').Router();
const loginController = require('../controllers/auth/loginController');
const checkLogin = require('../request/checkLoginRequest');

module.exports = (app, passport) => {
    router.get('/', loginController.index);
    router.post('/', checkLogin,  passport.authenticate('local', { 
        successRedirect: '/faculties', failureRedirect: '/', failureFlash: true 
    }), loginController.login);
    
    app.use('/', router);
}