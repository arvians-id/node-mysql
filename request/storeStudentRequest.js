const { check, validationResult } = require('express-validator');

const rules = [
    check('faculty')
        .notEmpty().withMessage('The faculty field cannot be empty')
        .trim()
        .escape(),
    check('programStudy')
        .notEmpty().withMessage('The program study field cannot be empty')
        .trim()
        .escape(),
    check('fullName')
        .notEmpty().withMessage('The full name field cannot be empty')
        .trim()
        .escape(),
    check('nim')
        .notEmpty().withMessage('The nim field cannot be empty')
        .bail()
        .isLength({ min: 10, max: 10 }).withMessage('The nim minimum is 10, and max is 10 characters log')
        .trim()
        .escape(),
    check('jenisKelamin')
        .notEmpty().withMessage('The jenis kelamin field cannot be empty')
        .trim()
        .escape(),
    check('noHandphone')
        .notEmpty().withMessage('The no handphone field cannot be empty')
        .trim()
        .escape(),
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('post', req.body);
            req.flash('fail', errors.array());
            res.redirect('/students/create');

            return false;
        }
        next()
    }
]

module.exports = validateTodo;