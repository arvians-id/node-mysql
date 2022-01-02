const { check, validationResult } = require('express-validator');

const rules = [
    check('email')
        .notEmpty().withMessage('The email field cannot be empty')
        .bail()
        .isEmail().withMessage('The email must be valid email')
        .trim()
        .escape(),
    check('password')
        .notEmpty().withMessage('The password field cannot be empty')
        .trim()
        .escape()
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('post', req.body);
            req.flash('error', errors.array());
            return res.redirect('/');
        }
        next()
    }
]

module.exports = validateTodo;