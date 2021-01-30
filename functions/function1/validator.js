const { body, validationResult } = require('express-validator')

const badRequestErrorHandling = (req, res, next) => {
    console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}

const createUser = [
    [
        body('name').isString(),
        body('age').isInt(),
    ],
    badRequestErrorHandling
]

module.exports = {
    createUser
}