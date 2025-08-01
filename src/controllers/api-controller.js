/**
 * API CONTROLLER - Core API endpoints
 * Basic API information and system health monitoring
 */

const config = require('../config/config.json');

const apiController = {
    // GET / - Root endpoint with API information
    getApiInfo: (req, res) => {
        res.json({
            message: 'Express API Server',
            status: 'running',
            timestamp: new Date().toISOString()
        });
    },

    // GET /health - Health check endpoint
    getHealth: (req, res) => {
        res.json({
            status: 'OK',
            environment: config.server.env,
            host: config.server.host,
            port: config.server.port,
            protocol: config.server.protocol,
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            checks: {
                memory: process.memoryUsage(),
                // Future: Add database health, redis health, etc.
            }
        });
    }
};

module.exports = apiController;
