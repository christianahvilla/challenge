const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getRegions);

module.exports = router;