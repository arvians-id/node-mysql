const router = require('express').Router();
const registerController = require('../controllers/auth/registerController');
const storeValidation = require('../request/storeUserRequest');

module.exports = app => {
    router.get('/', registerController.index);
    router.post('/', storeValidation, registerController.register);
    
    app.use('/register', router);
}