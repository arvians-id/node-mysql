const router = require('express').Router();
const studentController  = require('../controllers/studentController');

module.exports = (app) => {
    router.get('/', studentController.index);
    router.get('/create', studentController.create);
    router.post('/', studentController.store);
    router.get('/:id', studentController.show);
    router.delete('/:id', studentController.destroy);

    app.use('/students', router);
} 