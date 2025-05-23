import express from "express";
import middleWare from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", middleWare, getUsersForSidebar);
router.get("/:id", middleWare, getMessages);

router.post("/send/:id", middleWare, sendMessage);

export default router;
