/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import individual route modules
const homeRoutes = require('./home');
const healthRoutes = require('./health');

// Mount all routes with their paths
router.use('/', homeRoutes);           // Root routes (/, /info, etc.)
router.use('/health', healthRoutes);   // Health check routes

// Future route mappings (add as needed):
// const authRoutes = require('./auth');
// const userRoutes = require('./user');
// const productRoutes = require('./product');
// router.use('/api/v1/auth', authRoutes);
// router.use('/api/v1/users', userRoutes);
// router.use('/api/v1/products', productRoutes);

module.exports = router;
