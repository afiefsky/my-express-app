/**
 * HEALTH CONTROLLER - System health and monitoring
 * Health check logic that can become a separate service
 */

const config = require('../config/config.json');

const healthController = {
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

module.exports = healthController;
