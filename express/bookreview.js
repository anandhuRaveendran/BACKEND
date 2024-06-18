const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let reviews = [];

app.post('/submit', (req, res) => {
  const { title, review } = req.body;

  if (!title || !review) {
    return res.status(400).json({ error: 'Title and content are required' });
  }



  res.status(200).json({ message: 'Review submitted successfully',title, review });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const examplebook = {
  title: 'Harrypotter',
  review: 'This is a fantastic book!'
};

const axios = require('axios');
axios.post('http://localhost:3000/submit', examplebook)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error submitting review:', error.response.data);
  });
