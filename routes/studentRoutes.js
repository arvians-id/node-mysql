const router = require('express').Router();
const studentController  = require('../app/controllers/studentController');
const storeValidation = require('../app/request/storeStudentRequest');
const { isAuthenticated } = require('../app/middleware');

module.exports = (app) => {
    router.get('/', studentController.index);
    router.get('/create', studentController.create);
    router.post('/', storeValidation, studentController.store);
    router.get('/getProgramStudies/:facultyId', studentController.getProgramStudies);
    router.get('/:id', studentController.show);
    router.delete('/:id', studentController.destroy);

    app.use('/students', isAuthenticated, router);
} 