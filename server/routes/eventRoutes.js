import express from "express";
import {
  handleAddEvent,
  handleGetAll,
  handleDeleteEvent,
  handleEditEvent // Import handleEditEvent as a named export
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/add", handleAddEvent);
router.get("/all", handleGetAll);
router.delete("/delete/:id", handleDeleteEvent);
router.put("/edit/:eventId", handleEditEvent);

export default router;
