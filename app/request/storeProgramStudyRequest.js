const { check, validationResult } = require('express-validator');

const rules = [
    check('faculty')
        .notEmpty().withMessage('The faculty field cannot be empty')
        .trim()
        .escape(),
    check('name')
        .notEmpty().withMessage('The name field cannot be empty')
        .trim()
        .escape()
]

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('post', req.body);
            req.flash('error', errors.array());
            return res.redirect('/program-studies/create');
        }

        return next();
    }   
]

module.exports = validateTodo