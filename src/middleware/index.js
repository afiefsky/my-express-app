/**
 * MIDDLEWARE EXAMPLES
 * These can become separate services or shared libraries
 */

// Example: Request logging middleware
const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
};

// Example: Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};

// Future: Auth middleware, rate limiting, etc.

module.exports = {
    requestLogger,
    errorHandler,
    // Add more middleware here
};
