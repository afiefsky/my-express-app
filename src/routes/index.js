/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import route modules
const healthRoutes = require('./health');

// Simple root route
router.get('/', (req, res) => {
    res.json({
        message: 'Express API Server',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

// Mount health routes
router.use('/health', healthRoutes);

module.exports = router;
