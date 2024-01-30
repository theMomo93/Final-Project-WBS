import UserModel from "../models/authModel.js";
import bcrypt from "bcrypt";


export const handleRegister = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      const newUser = new UserModel({
        username,
        email,
        password,
      });
  
      await newUser.save();
  
      res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Error during registration:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


  export const handleLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      // Include the user ID in the response
      res.status(200).json({ message: "Login successful", userId: user._id });
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  export const getUserById = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Respond with the user data
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        // Add other fields as needed
      });
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };