const express = require('express');
const router = express.Router();

router.get('/v1/fun2', (req, res) => {
    res.json({ message: 'Function2!' });
});
router.get('/v1/fun2/users', (req, res) => {
    res.json([{ name: 'Taro2' }, { name: 'Hanako2' }]);
});

module.exports = router;
