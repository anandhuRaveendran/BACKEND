const express = require('express');
const app = express();

const rateLimitWindowMs = 1 * 60 * 1000; 
const maxRequestsPerWindow = 5;

const requestCounts = {};

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    if (!requestCounts[ip]) {
        requestCounts[ip] = [];
    }

    const currentTime = Date.now();

    requestCounts[ip] = requestCounts[ip].filter(timestamp => currentTime - timestamp < rateLimitWindowMs);

    if (requestCounts[ip].length >= maxRequestsPerWindow) {
        res.status(429).send('Too many requests from this IP, please try again after a minute');
    } else {
        requestCounts[ip].push(currentTime);
        next();
    }
};

app.use(rateLimiter);

app.get('/welcome/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Welcome, User ${userId}! Your IP address is ${req.ip}`);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
