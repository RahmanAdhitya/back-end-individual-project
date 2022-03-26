const express = require('express');
const router = express.Router();
const { authControllers } = require('../controllers');

const logging = require('../middleware/logging');

router.get('/auth/signin', logging, authControllers.signIn);
router.post('/auth/signup', logging, authControllers.singUp);

module.exports = router;
