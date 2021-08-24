const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.displayUI);

module.exports = router;