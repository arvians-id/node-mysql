const router = require('express').Router();
const registerController = require('../controllers/auth/registerController');
const storeValidation = require('../request/storeUserRequest');
const { isNotAuthenticated } = require('../middleware');

module.exports = app => {
    router.get('/', registerController.index);
    router.post('/', storeValidation, registerController.register);
    
    app.use('/register', isNotAuthenticated, router);
}