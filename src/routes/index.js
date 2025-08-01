/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import controllers
const healthController = require('../controllers/healthController');

// Import route modules
const healthRoutes = require('./health');

// Root route
router.get('/', healthController.getApiInfo);

// Mount health routes
router.use('/health', healthRoutes);

module.exports = router;
