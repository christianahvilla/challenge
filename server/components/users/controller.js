const userModel = require('./model');
const userDto = require('./dto');
const { errorHandler } = require('../../middleware');
const errors = require('../../services/utils/errors');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await userModel.getUsers();

            return res.send(userDto.multipleUser(users));
        } catch ({ message }) {
            return errorHandler(errors[message], req, res);
        }
    },

    async getUsersByRegion(req, res) {
        try {
            const { query: { region } } = req;
            const users = await userModel.getUsersByRegion(region);

            return res.send(userDto.multipleUserRegion(users));
        } catch ({ message }) {
            return errorHandler(errors[message], req, res);
        }
    },
};
