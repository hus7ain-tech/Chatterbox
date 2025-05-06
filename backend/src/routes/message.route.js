import express from "express";
import middleWare from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", middleWare, getUsersForSidebar);
router.get("/:id", middleWare, getMessages);

router.post(":id/send", middleWare, sendMessage);

export default router;
