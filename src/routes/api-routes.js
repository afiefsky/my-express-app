/**
 * API ROUTES - Core API endpoints
 * Basic API info and health monitoring endpoints
 */

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller');

// GET / - Basic API info
router.get('/', apiController.getApiInfo);

// GET /health - Detailed health check
router.get('/health', apiController.getHealth);

module.exports = router;
