/**
 * CONFIGURATION MANAGEMENT
 * Loads from JSON with environment variable overrides
 */

const defaultConfig = require('./default.json');

const config = {
    server: {
        port: process.env.PORT || defaultConfig.server.port,
        host: process.env.HOST || defaultConfig.server.host,
        protocol: process.env.PROTOCOL || defaultConfig.server.protocol,
        env: process.env.NODE_ENV || defaultConfig.server.env
    }
};

module.exports = config;
