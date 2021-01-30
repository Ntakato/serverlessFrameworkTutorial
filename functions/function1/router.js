const express = require('express')
const router = express.Router()
const validator = require('./validator')

router.get('/v1/fun1', (req, res) => {
    res.json({ message: 'Function1!' })
})
router.post('/v1/fun1/user', validator.createUser, (req, res) => {
    const { name, age } = req.body
    res.json({ id: 'id', name, age })
})

module.exports = router;
