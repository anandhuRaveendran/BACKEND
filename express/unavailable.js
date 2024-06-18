const express = require('express');
const app = express();

let maintenanceMode = false;

const maintenanceMiddleware = (req, res, next) => {
    if (maintenanceMode) {
        res.status(503).send('Service Unavailable. We are currently undergoing maintenance. Please try again later.');
    } else {
        next();
    }
};

app.use(maintenanceMiddleware);

app.get('/welcome/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Welcome, User ${userId}!`);
});

app.post('/toggle-maintenance', (req, res) => {
    maintenanceMode = !maintenanceMode;
    res.send(`Maintenance mode is now ${maintenanceMode ? 'ON' : 'OFF'}`);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
