const _ = require('lodash');
const db = require('../../services/db/db');

module.exports = {
    async getUsers() {
        return new Promise((resolve, reject) => {
            const users = _.map(db.usersById, (userInfo) => ({ ...userInfo }));

            if (!users.length) reject(Error(404));

            setTimeout(() => {
                return resolve(users);
            }, 500);
        });
    },

    async getUsersByRegion(region) {
        return new Promise((resolve, reject) => {
            const usersByRegion = _.filter(db.usersById, (userInfo) => {
                return _.transform(db.itemsOfUserByUsername, (result, value, key) => {
                    if (value.includes(region)) result.push(key);
                }, []).includes(userInfo.username);
            });

            if (!usersByRegion.length) reject(Error(404));

            const ageRegions = _.map(_.groupBy(usersByRegion, 'age'), (element, index) => ({ age: index, count: element.length }));

            setTimeout(() => {
                return resolve(ageRegions);
            }, 500);
        }, 500);
    },
};
