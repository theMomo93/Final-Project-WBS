import express from "express";
import {
    handleAddComment,
    handleGetAllComments,
    handleGetOneComment,
    handleDeleteComment,
    handleEditComment
} from "../controllers/commentController.js"


const router =express.Router();

router.post("/add", handleAddComment);
router.get("/get/all/:id", handleGetAllComments);
router.get("/get/one", handleGetOneComment);
router.delete("/delete/:id", handleDeleteComment);
router.put("/edit", handleEditComment);
export default router;