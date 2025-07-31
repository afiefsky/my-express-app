/**
 * HOME ROUTES - Main application routes
 * Root path routes like /, /info, /version
 */

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET / - App info
router.get('/', indexController.getAppInfo);

// Future home routes can be added here:
// router.get('/version', indexController.getVersion);
// router.get('/info', indexController.getDetailedInfo);

module.exports = router;
