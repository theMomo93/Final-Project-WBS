// index.js
import express from 'express';
import cors from 'cors';
import connectDB from './utils/connectDB.js';
import userRoutes from './routes/userRoutes.js';
import questionRoutes from "./routes/questionRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use('/users', userRoutes); // Use the user routes
app.use("/question", questionRoutes);
app.use("/comment", commentRoutes);

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
