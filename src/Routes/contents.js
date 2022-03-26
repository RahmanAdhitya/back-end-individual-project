const express = require('express');
const router = express.Router();
const { contentControllers } = require('../controllers');

const logging = require('../middleware/logging');

router.get('/', logging, contentControllers.getAllContent);
router.get('/:id', logging, contentControllers.getContentById);
router.post('/', logging, contentControllers.createNewContent);
router.patch('/:id', logging, contentControllers.editContentById);
router.delete('/:id', logging, contentControllers.deleteContentById);

module.exports = router;
