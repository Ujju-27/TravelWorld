import express from 'express';
import { createBooking, getBooking, getAllBooking, } from '../controllers/bookController.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()

router.post("/",verifyUser, createBooking);
router.get("/:id",verifyUser, getBooking);
router.post("/",verifyAdmin, getAllBooking);

export default router;