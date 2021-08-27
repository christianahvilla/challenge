const uiDao = require('./dao');

module.exports = {
    async displayUI() {
        return uiDao.displayUI();
    },
};
