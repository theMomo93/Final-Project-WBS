import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from "../utils/sendForgotPasswordEmail.js";

export const handleRegister = async (req, res) => {
  try {
    

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
    console.log("this is login server", req.body);

    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false, message: "Invalid email or password" });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("this is login server passwordMatch", passwordMatch);
    
    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1h' });

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

export const uploadProfileImage = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if an image was uploaded to Cloudinary
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // Save Cloudinary URL to user document
    user.profileImage = req.file.path; // Assuming the Cloudinary URL is in req.file.path
    await user.save();

    res.status(200).json({
      success: true,
      message: "Image uploaded and linked to user successfully",
      profileImage: user.profileImage, // Include the profile image URL in the response
    });
  
  } catch (error) {
    console.error("Error during image upload:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const handleGetUsername = async (req, res) => {
  try {
    console.log("this is one User");

    const username = req.params.username; // Extract user ID from request parameters

    const user = await User.findOne({ username: username }).select("-password");

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

export const handleDeleteUser=async(req, res)=>{
  try {
    console.log("This is delete user", req.params.id);
    const user = await User.findByIdAndDelete(req.params.id);
    console.log("user", user);
    res.send({success:true});
    
  }catch (error){
  console.log("error in delete question", error.message);
  res.status(500).send({success:false, error: error.message});
}
}


export const handleForgotPassword = async (req, res) => {
  try{
  const user = await User.findOne({
    $or: [
      { email: req.body.emailOrUsername },
    ],
  });
  console.log("🚀 ~ user:", user);

  if (!user) return res.send({ success: false, error: "User not found" });


  sendForgotPassEmail(user.email);

  res.send({ success: true });
} catch (error) {
  console.log("🚀 ~ error in handleForgotPass:", error.message);

  res.status(500).send(error.message);
}
};

