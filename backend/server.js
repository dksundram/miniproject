// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://mirroraccone:NduzVvb4dILJeZxl@test-cluster.wvpnfkn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB Atlas connection error:', err));

// Routes
app.post('/api/signup', async (req, res) => {
  const { fname,lname,  username, email, phone, password } = req.body;
  try {
    const user = new User({ fname,lname,  username, email, phone, password });
    const savedUser = await user.save();
    console.log(savedUser)
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
