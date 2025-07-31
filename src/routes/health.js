/**
 * HEALTH ROUTES - System health and monitoring
 * Health check endpoints for load balancers and monitoring
 */

const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

// GET /health - Basic health check
router.get('/', healthController.getHealth);

module.exports = router;
