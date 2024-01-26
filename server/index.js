// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

// Call the connectDB function to establish a connection to MongoDB
connectDB();

// Define a mongoose model (schema)
const userSchema = new mongoose.Schema({
  // Define your schema fields here
  username: String,
  email: String,
  password: String,
});

// Create a mongoose model based on the schema
const UserModel = mongoose.model('User', userSchema);

// Express route for user REGISTER USER
app.post('/api/register', async (req, res) => {
    try {
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// LOGIN USER 
// Express server endpoint
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(200).json({ message: 'Login successful' });
    
    }
  });
  



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
