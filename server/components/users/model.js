const userDao = require('./dao');

module.exports = {
    async getUsers() {
        return userDao.getUsers();
    },

    async getUsersByRegion(region) {
        return userDao.getUsersByRegion(region);
    },
};
