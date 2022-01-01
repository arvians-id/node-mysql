const router = require('express').Router();
const studentController  = require('../controllers/studentController');
const storeValidation = require('../request/storeStudentRequest');

module.exports = (app) => {
    router.get('/', studentController.index);
    router.get('/create', studentController.create);
    router.post('/', storeValidation, studentController.store);
    router.get('/getProgramStudies/:facultyId', studentController.getProgramStudies);
    router.get('/:id', studentController.show);
    router.delete('/:id', studentController.destroy);

    app.use('/students', router);
} 