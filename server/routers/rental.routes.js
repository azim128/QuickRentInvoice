import express from "express";

import { createRental } from "../controllers/rental.controllers.js";
const router = express.Router();

router.post("/", createRental);

export default router;
