const express = require('express');
const app = express();

const loggermiddleware = require('./middleware/logger.middleware');
const apiKeyMiddleware = require('./middleware/apiKey.middleware');

const { PrismaMssql } = require('@prisma/adapter-mssql');

const adapter = new PrismaMssql({
    server: "localhost",
    port: 1433,
    database: "AuthCore",
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    },
    driver: "msnodesqlv8"
});

// JSON verilerini okuyabilmek için
app.use(express.json());

// Logger middleware
app.use(loggermiddleware);

// API key middleware
app.use(apiKeyMiddleware);

// User routes
const userRoutes = require('./routes/user.routes');

// 1. Middleware
app.use((req, res, next) => {
    console.log("1. Middleware çalıştı");
    next();
});

// 2. Middleware
app.use((req, res, next) => {
    console.log("2. Middleware çalıştı");
    next();
});

// Health endpoint
app.get("/api/health", (req, res) => {
    res.json({
        status: "başardık oleyyy"
    });
});

// Hello endpoint
app.get("/api/hello", (req, res) => {
    const { name } = req.query;

    res.json({
        message: `Merhaba, ${name}!`
    });
});

// ID ile kullanıcı getirme
app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        message: "Kullanıcı bilgisi getirildi",
        user: {
            id: id
        }
    });
});

// Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});