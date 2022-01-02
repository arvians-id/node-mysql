const { check, validationResult } = require('express-validator');
const multer = require('multer');

const rules = [
    check('name')
        .notEmpty().withMessage('The name field cannot be empty')
        .trim()
        .escape(),
    check('email')
        .notEmpty().withMessage('The email field cannot be empty')
        .bail()
        .isEmail().withMessage('The email must be valid email')
        .trim()
        .escape(),
    check('password')
        .notEmpty().withMessage('The password field cannot be empty').bail()
        .isLength({ min: 5 })
        .trim()
        .escape(),
    check('password_confirmation')
        .notEmpty().withMessage('The password confirmation field cannot be empty')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password');
            }
        
            return true;
        })
        .trim()
        .escape(),
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('post', req.body);
            req.flash('error', errors.array());
            return res.redirect('/register');
        }
        next()
    }
]

module.exports = validateTodo;