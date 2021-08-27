/* eslint-disable no-console */
const app = require('./services/utils/server');

// server config
const port = process.env.PORT || 3000;

// create server start method
const start = () => {
    return new Promise((resolve) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve();
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`);
    });
};

module.exports = start;
