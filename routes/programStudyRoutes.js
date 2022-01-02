const router = require('express').Router();
const programStudyController = require('../app/controllers/programStudyController');
const storeValidation = require('../app/request/storeProgramStudyRequest');
const { isAuthenticated } = require('../app/middleware');

module.exports = app => {
    router.get('/', programStudyController.index);
    router.get('/create', programStudyController.create);
    router.post('/', storeValidation, programStudyController.store);
    router.get('/:id', programStudyController.show);
    router.delete('/:id', programStudyController.destroy);

    app.use('/program-studies', isAuthenticated, router);
}