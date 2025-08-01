/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import controllers
const appController = require('../controllers/appController');

// Import route modules
const healthRoutes = require('./health');

// Root route
router.get('/', appController.getApiInfo);

// Mount health routes
router.use('/health', healthRoutes);

module.exports = router;
