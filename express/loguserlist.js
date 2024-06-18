const express = require('express');
const app = express();

const logIpMiddleware = (req, res, next) => {
    console.log(`Client IP: ${req.ip}`);
    next();
};

app.use(logIpMiddleware);

app.get('/', (req, res) => {
    res.send(`Welcome`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
