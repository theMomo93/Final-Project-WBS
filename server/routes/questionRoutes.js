import express from "express";
import {
  handleAddQuestion,
  handleGetAllQuestions,
  handleGetOneQuestion,
  handleDeleteQuestion,
  handleEditQuestion
} from "../controllers/questionController.js";

const router = express.Router();

router.post("/add", handleAddQuestion);
router.get("/get/all", handleGetAllQuestions);
router.get("/get/one", handleGetOneQuestion);
router.delete("/delete/:id", handleDeleteQuestion);
router.put("/edit", handleEditQuestion);
export default router;