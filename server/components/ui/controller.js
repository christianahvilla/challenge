const path = require('path');
const uiModel = require('./model');

module.exports = {
    async displayUI(_, res) {
        return res.sendFile(path.join(__dirname, '../../..', 'build', 'index.html'));
    },
};
