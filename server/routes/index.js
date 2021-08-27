const express = require('express');
const users = require('../components/users/routes');
const regions = require('../components/regions/routes');
const health = require('../components/health/routes');
const displayUI = require('../components/ui/routes');

const router = express.Router();

router.use('/users', users);
router.use('/regions', regions);
router.use('/health', health);
router.use('/', displayUI);

module.exports = router;
