import User from "../models/User.js";

export const handleRegister = async (req, res) => {
  try {
    console.log("this is register", req.body);

    const newUser = await User.create(req.body);
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

    const user = await User.findOne({
      email: req.body.email, 
    }).select("-password");
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false });
    }

    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send(error.message);
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