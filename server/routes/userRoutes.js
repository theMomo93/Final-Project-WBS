// userRoutes.js
import express from 'express';
import { getUserById } from '../controllers/userController.js';

const router = express.Router();

// Define routes related to user data
router.get('/:userId', getUserById);

export default router;
