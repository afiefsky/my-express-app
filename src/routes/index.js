/**
 * ROUTES INDEX - Central route registry
 * All routes are mapped here for easy management
 */

const express = require('express');
const router = express.Router();

// Import individual route modules
const homeRoutes = require('./home');
const healthRoutes = require('./health');
const userRoutes = require('./user');  // Example: Add new routes here

// Mount all routes with their paths
router.use('/', homeRoutes);           // Root routes (/, /info, etc.)
router.use('/health', healthRoutes);   // Health check routes
router.use('/api/v1/users', userRoutes);  // User management routes (example)

// Future route mappings (add as needed):
// const authRoutes = require('./auth');
// const productRoutes = require('./product');
// router.use('/api/v1/auth', authRoutes);
// router.use('/api/v1/products', productRoutes);
// router.use('/admin', adminRoutes);

module.exports = router;
