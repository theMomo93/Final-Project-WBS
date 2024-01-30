// index.js
import express from 'express';
import cors from 'cors';
import connectDB from './utils/connectDB.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js'; // Import the user routes

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Use the user routes

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
