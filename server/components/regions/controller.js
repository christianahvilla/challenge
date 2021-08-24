const regionModel = require('./model');
const regionDto = require('./dto');

module.exports = {
    async getRegions(_, res) {
        const regions = await regionModel.getRegions();

        return res.send(regionDto.multiple(regions));
    },
};
