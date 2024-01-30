// userController.js
import UserModel from "../models/authModel.js";

// Controller to get user data by ID
export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is missing in the request' });
    }

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