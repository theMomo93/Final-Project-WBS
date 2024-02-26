import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const handleRegister = async (req, res) => {
  try {
    console.log("this is register", req.body);

    const { password, ...userData } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...userData, password: hashedPassword });
    console.log("🚀 ~ newUser:", newUser);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in register:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
export const handleLogin = async (req, res) => {
  try {
    console.log("this is login");

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false, message: "Invalid email or password" });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

      res.send({ success: true, user, token });
    } else {
      
      return res.send({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleUser = async (req, res) => {
  try {
    console.log("this is one User");

    const userId = req.params.id; // Extract user ID from request parameters

    const user = await User.findOne({ _id: userId }).select("-password");

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    console.log("🚀 ~ user:", user);

    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in get user:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};