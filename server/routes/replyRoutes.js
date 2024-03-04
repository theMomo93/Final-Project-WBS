import express from "express";

import {
  handleAddReply,
  handleGetAllReplies,
  handleDeleteReply,
  handleEditReply,
} from "../controllers/replyController.js";

const router = express.Router();

router.post("/add/:commentId", handleAddReply);
router.get("/all/:commentId", handleGetAllReplies);
router.delete("/delete/:id", handleDeleteReply);
router.put("/edit", handleEditReply);
export default router;
