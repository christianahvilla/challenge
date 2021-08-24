const userModel = require('./model');
const userDto = require('./dto');

module.exports = {
    async getUsers(_, res) {
        const users = await userModel.getUsers();

        return res.send(userDto.multipleUser(users));
    },

    async getUsersByRegion(req, res) {
        const { query: { region } } = req;
        const users = await userModel.getUsersByRegion(region);

        return res.send(userDto.multipleUserRegion(users));
    },
};
