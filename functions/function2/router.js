const express = require('express')
const router = express.Router()
const validator = require('./validator')

router.get('/fun2/v1/user/:id', validator.userId, (req, res) => {
    const { id } = req.params
    const users = {
        'user1': { name: 'Bob', age: 23 },
        'user2': { name: 'Alice', age: 20 },
    }
    res.json({ ...users[id] })
})

module.exports = router
