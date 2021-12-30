const router = require('express').Router();
const facultyController = require('../controllers/facultyController');
const storeSalidation = require('../request/storeFacultyRequest');

module.exports = app => {
    router.get('/', facultyController.index);
    router.get('/create', facultyController.create);
    router.post('/', storeSalidation, facultyController.store);
    router.get('/:id', facultyController.show);
    router.delete('/:id', facultyController.destroy);
    
    app.use('/faculties', router);
}