const _ = require('lodash');
const db = require('../../services/db/db');

module.exports = {
    async getRegions() {
        return new Promise((resolve, reject) => {
            const formattedRegion = _.transform(db.itemsOfUserByUsername, (result, regions) => {
                regions.forEach((region) => {
                    if (!result.includes(region)) { result.push(region); }
                });
            }, []).sort();

            if (!formattedRegion.length) reject(Error('No data'));

            setTimeout(() => {
                return resolve(formattedRegion);
            }, 500);
        }, 500);
    },
};
