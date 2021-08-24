const regionDao = require('./dao');

module.exports = {
    async getRegions() {
        return regionDao.getRegions();
    },
};
