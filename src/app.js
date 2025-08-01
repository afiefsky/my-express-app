/**
 * EXPRESS APP SETUP
 * Separation allows this to be containerized easily
 */

const express = require('express');

// Load configuration
const defaultConfig = require('./config/config.json');
const config = {
    server: {
        port: process.env.PORT || defaultConfig.server.port,
        host: process.env.HOST || defaultConfig.server.host,
        protocol: process.env.PROTOCOL || defaultConfig.server.protocol,
        env: process.env.NODE_ENV || defaultConfig.server.env
    }
};

// Import central route registry
const routes = require('./routes');

const createApp = () => {
    const app = express();
    
    // Future: Add middleware here
    // app.use(express.json());
    // app.use(cors());
    // app.use(rateLimitMiddleware);
    
    // Mount all routes through central registry
    app.use('/', routes);
    
    return app;
};

module.exports = { createApp, config };
