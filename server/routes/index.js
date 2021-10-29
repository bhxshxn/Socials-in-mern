const express = require('express');
const router = express.Router();


router.use('/user', require('./user.js'));

router.get('/', (req, res) => {
    res.send('hello from backend');
});


module.exports = router;