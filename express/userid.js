const express = require('express');
const app = express();
const router = express.Router();

const date = (req,res,next) => {
    console.log(req)
    next()
}

router.use('/date/123', date)

router.get('/date/123', (req,res) => {
    res.send('Time displayed');
})

router.get('/date/time', (req,res) => {
    res.send('Time displayed in date router also here');
})

app.get('/', (req,res) => {
    res.send('Move to the date router')
})

app.use('/', router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });