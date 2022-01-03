const { check, validationResult } = require('express-validator');
const { upload, multer } = require('../../config/multer');

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
    check('image')
        .custom((value, { req }) => {
            if(typeof req.file == 'undefined')
                throw new Error('The image field invalid');
            
            return true
        })
];

const validateTodo = [
    (req, res, next) => {
        upload.single('image')(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log(err.message);
            } else if (err) {
                console.log(err.message);
            }
            
            next()
        })
    },
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