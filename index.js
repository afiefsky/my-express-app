// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Use environment variables with fallback defaults
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
        environment: nodeEnv,
        port: port,
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        environment: nodeEnv,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`🚀 My express app listening at http://localhost:${port}`);
    console.log(`📊 Environment: ${nodeEnv}`);
    console.log(`🕐 Started at: ${new Date().toISOString()}`);
});