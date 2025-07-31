// Load environment variables first
require('dotenv').config();

const express = require('express');
const app = express();

// Environment configuration with fallbacks
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';  // localhost = local only, 0.0.0.0 = all interfaces
const protocol = process.env.PROTOCOL || 'http';  // http for dev, https for production
const nodeEnv = process.env.NODE_ENV || 'development';

/**
 * ROUTES
 */

// Root endpoint - returns app info
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
        environment: nodeEnv,
        host: host,
        port: port,
        protocol: protocol,
        timestamp: new Date().toISOString()  // ISO format: 2025-01-31T12:34:56.789Z
    });
});

// Health check - used by load balancers and monitoring
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        environment: nodeEnv,
        host: host,
        port: port,
        protocol: protocol,
        uptime: process.uptime(),  // seconds since process started
        timestamp: new Date().toISOString()
    });
});

/**
 * START SERVER
 */
app.listen(port, host, () => {
    console.log(`🚀 Server running at ${protocol}://${host}:${port}`);
    console.log(`📊 Environment: ${nodeEnv}`);
    console.log(`🌐 Host: ${host}`);
    console.log(`🔒 Protocol: ${protocol}`);
    console.log(`🕐 Started: ${new Date().toISOString()}`);
    
    // Note: In production, app may run HTTP internally but serve HTTPS externally via proxy
});