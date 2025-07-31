/**
 * SERVER ENTRY POINT
 * Clean separation allows easy containerization
 */

// Load environment variables first
require('dotenv').config();

const { createApp, config } = require('./src/app');

const startServer = () => {
    const app = createApp();
    
    app.listen(config.server.port, config.server.host, () => {
        console.log(`🚀 Server running at ${config.server.protocol}://${config.server.host}:${config.server.port}`);
        console.log(`📊 Environment: ${config.server.env}`);
        console.log(`🌐 Host: ${config.server.host}`);
        console.log(`🔒 Protocol: ${config.server.protocol}`);
        console.log(`🕐 Started: ${new Date().toISOString()}`);
        
        // Note: In production, app may run HTTP internally but serve HTTPS externally via proxy
    });
};

// Start server if this file is run directly
if (require.main === module) {
    startServer();
}

module.exports = { startServer };
