import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
