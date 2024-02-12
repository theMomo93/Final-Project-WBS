// routes/authRoutes.js
import express from "express";
import {
    handleRegister,
    handleLogin,
    handleUser,
    
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin); 
router.get("/id/:id", handleUser );
export default router;
