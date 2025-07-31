/**
 * EXPRESS APP SETUP
 * Separation allows this to be containerized easily
 */

const express = require('express');
const config = require('./config');

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
