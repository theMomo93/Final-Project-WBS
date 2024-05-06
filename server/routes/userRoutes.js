// routes/authRoutes.js
import express from "express";
import {
    handleRegister,
    handleLogin,
    handleUser,
    uploadProfileImage,
    handleGetUsername,
    handleDeleteUser,

    
    
} from "../controllers/userController.js";
import uploadCloudinary from "../middlewears/multier-cloudinary.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin); 
router.get("/id/:id", handleUser );
router.post("/add/image/:id", uploadCloudinary.single("profileImage"), uploadProfileImage);
router.get("/username/:username", handleGetUsername );
router.delete("/delete/:id", handleDeleteUser)
export default router;