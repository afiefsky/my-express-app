/**
 * CONFIGURATION MANAGEMENT
 * Centralized config that can be extended as needed
 */

const config = {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        protocol: process.env.PROTOCOL || 'http',
        env: process.env.NODE_ENV || 'development'
    }
    
    // Future config sections can be added here:
    // database: { ... },
    // services: { ... },
    // security: { ... }
};

module.exports = config;
