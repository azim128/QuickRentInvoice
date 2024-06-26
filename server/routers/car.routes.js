import express from "express";
import { getAllCars, getCarById } from "../controllers/car.controllers.js";

const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", getCarById);

export default router;
