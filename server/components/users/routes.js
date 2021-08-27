const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getUsers);
router.get('/age', controller.getUsersByRegion);

module.exports = router;
