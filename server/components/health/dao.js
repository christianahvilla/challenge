module.exports = {
    async health() {
        return new Promise((resolve, reject) => {
            return resolve('ok');
        });
    },
};
