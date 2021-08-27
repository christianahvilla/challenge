module.exports = {
    async health() {
        return new Promise((resolve, _reject) => {
            return resolve('ok');
        });
    },
};
