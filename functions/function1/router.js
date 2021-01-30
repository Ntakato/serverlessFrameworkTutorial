const express = require('express');
const router = express.Router();

router.get('/v1/fun1', (req, res) => {
    res.json({ message: 'Function1!' });
});
router.get('/v1/fun1/users', (req, res) => {
    res.json([{ name: 'Taro1' }, { name: 'Hanako1' }]);
});

module.exports = router;
