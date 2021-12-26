const { check, validationResult } = require('express-validator');

const rules = [
    check('name')
        .notEmpty().withMessage('The name field cannot be empty')
        .trim()
        .escape()
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({
                errors: errors.array()
            })

        next()
    }
];

module.exports = validateTodo;