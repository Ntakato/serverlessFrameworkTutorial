const { param, validationResult } = require('express-validator')

const badRequestErrorHandling = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}

const userId = [
    [
        param('id').isString(),
        param('id').isLength({ min: 5, max: 5 })
    ],
    badRequestErrorHandling
]

module.exports = {
    userId
}