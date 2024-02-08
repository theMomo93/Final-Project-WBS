import express from "express";
import {
  handleAddQuestion,
  handleGetAllQuestions,
} from "../controllers/questionController.js";

const router = express.Router();

router.post("/add", handleAddQuestion);
router.get("/get/all", handleGetAllQuestions);


export default router;