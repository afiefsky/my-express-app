/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import route modules
const apiRoutes = require('./api-routes');

// Mount API routes at root level
// This provides both / and /health endpoints
router.use('/', apiRoutes);

module.exports = router;
