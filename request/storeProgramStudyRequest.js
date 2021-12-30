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
            req.flash('fail', errors.array());
            res.redirect('/program-studies/create');

            return false;
        }

        return next();
    }   
]

module.exports = validateTodo