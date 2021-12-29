const router = require('express').Router();
const programStudyController = require('../controllers/programStudyController');

module.exports = app => {
    router.get('/', programStudyController.index);
    router.get('/create', programStudyController.create);
    router.post('/', programStudyController.store);
    router.get('/:id', programStudyController.show);
    router.delete('/:id', programStudyController.destroy);

    app.use('/program-studies', router);
}