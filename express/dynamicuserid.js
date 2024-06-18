const express = require('express');
const app = express();

app.get('/welcome/:userId', (req, res) => {
    const userId = req.params.anandu;
    res.send(`Welcome, User ${userId}!`);
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
