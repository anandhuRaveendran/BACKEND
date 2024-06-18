
const express = require('express');

const app = express();
const port = 3000;

// Use the express.urlencoded middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve a simple HTML form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit-form" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <button type="submit">Submit</button>
    </form>
  `);
}); 
const validateUser=(req, res, next) =>{ 
  const { name, email } = req.body;
  console.log(email)

  if (!name || !email) {
    
    return res.status(400).send('Email and password are required');
  }
    next();
}
const registerUser = (req,res)=>{
    const { name, email } = req.body;
    const newUser = { name, email };
    console.log('User registered:', newUser);
  
    res.send('User registered successfully',newUser);
}
app.use(validateUser);
app.use(registerUser);
app.post('/submit-form', validateUser,registerUser);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});