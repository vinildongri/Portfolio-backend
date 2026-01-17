import express from "express";
import { sendContactMail } from "../controllers/mailController.js";

const router = express.Router();

// test changes
router.post("/send/mail", sendContactMail);

export default router;
