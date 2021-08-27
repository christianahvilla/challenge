const path = require('path');
const { error404Handler } = require('../../middleware');

module.exports = {
    async displayUI(req, res, next) {
        try {
            return res.sendFile(path.join(__dirname, '../../..', 'build', 'index.html'));
        } catch (_error) {
            return error404Handler(req, res, next);
        }
    },
};
