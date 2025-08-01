/**
 * APP CONTROLLER - Main application endpoints
 * Basic application information and status
 */

const appController = {
    // GET / - Root endpoint with API information
    getApiInfo: (req, res) => {
        res.json({
            message: 'Express API Server',
            status: 'running',
            timestamp: new Date().toISOString()
        });
    }
};

module.exports = appController;
