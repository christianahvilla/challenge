const regionModel = require('./model');
const regionDto = require('./dto');
const { errorHandler } = require('../../middleware');
const errors = require('../../services/utils/errors');

module.exports = {
    async getRegions(req, res) {
        try {
            const regions = await regionModel.getRegions();

            return res.send(regionDto.multiple(regions));
        } catch ({ message }) {
            return errorHandler(errors[message], req, res);
        }
    },
};
