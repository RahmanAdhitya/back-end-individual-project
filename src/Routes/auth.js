const express = require('express');
const router = express.Router();
const { authControllers } = require('../controllers');

router.get('/signin', authControllers.signIn);
router.post('/signup', authControllers.singUp);

module.exports = router;
