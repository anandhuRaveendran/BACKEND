const express = require('express');
const app = express();


const online=(req, res, next) => {
    console.log(` method:${req.method} and url: ${req.url}`);
    next();
}
app.use(online);

app.get('/home', (req, res) => {
  res.send('to college');
});
app.get('/college', (req, res) => {
    res.send('from home');
  });
  app.get('/department', (req, res) => {
    res.send('to class room');
  });

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
