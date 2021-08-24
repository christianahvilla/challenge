const healthModel = require('./model');
const healthDto = require('./dto');

module.exports = {
    async health(_, res) {
        const code = await healthModel.health();

        return res.send(healthDto.single(code));
    },
};
