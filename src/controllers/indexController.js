/**
 * INDEX CONTROLLER - App info and basic endpoints
 * Business logic for main app routes
 */

const config = require('../config');

const indexController = {
    // GET / - App info endpoint
    getAppInfo: (req, res) => {
        res.json({
            message: 'Hello World!',
            environment: config.server.env,
            host: config.server.host,
            port: config.server.port,
            protocol: config.server.protocol,
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        });
    }
};

module.exports = indexController;
