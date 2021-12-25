module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const facultyController = require('../controllers/facultyController');
    
    router.get('/', facultyController.index)
    
    app.use('/faculties', router);
}