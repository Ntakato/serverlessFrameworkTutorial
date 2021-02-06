const express = require('express')
const router = express.Router()
const validator = require('./validator')

router.post('/fun1/v1/user', validator.createUser, (req, res) => {
    const { name, age } = req.body
    res.json({ id: 'id', name, age })
})

module.exports = router;
