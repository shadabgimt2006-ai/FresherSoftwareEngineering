const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {

  console.log('Homepage accessed');
  console.log(path.join(__dirname, 'views/homepage.html'))
  res.sendFile(path.join(__dirname, 'views/homepage.html'));
});
app.get('/register', (req, res) =>{
  console.log('register accessed');
  console.log(path.join(__dirname, 'views/register.html'))
  res.sendFile(path.join(__dirname, 'views/register.html'))
});
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views/login.html')));

app.post('/register', (req, res) => {   
  console.log('User Registered:', req.body);
  res.redirect('/');
});

app.post('/login', (req, res) => {
  console.log('User Login Attempt:', req.body);
  res.redirect('/');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
