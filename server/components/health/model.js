const healthDao = require('./dao');

module.exports = {
    async health() {
        return healthDao.health();
    },
};
