import express from "express";

import { error, success } from "../middlewares/responseHandler.middleware.js";
import Rental from "../models/rental.models.js";
import calculateRemainingAmount from "../utils/calculateRemainingAmount.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    customer,
    car,
    weekly,
    daily,
    hourly,
    pickupDate,
    dropoffDate,
    discounts: discounts = 0,
    additionalCharges: additionalCharges = 0,
  } = req.body;
  // error handling for required fields
  if (!customer || !car || !pickupDate || !dropoffDate) {
    error(res, "Please provide all required fields", 400);
  }
  // calculate total amount
  const rentalDuration =
    (new Date(dropoffDate) - new Date(pickupDate)) / (1000 * 60 * 60); // Duration in hours

  let totalAmount = 0;
  if (rentalDuration >= 168) {
    // Weekly rate
    const weeks = Math.floor(rentalDuration / 168);
    totalAmount += weeks * weekly;
    const remainingHours = rentalDuration % 168;
    totalAmount += calculateRemainingAmount(remainingHours, daily, hourly);
  } else {
    totalAmount += calculateRemainingAmount(rentalDuration, daily, hourly);
  }

  totalAmount = totalAmount - discounts + additionalCharges;
  const newRental = new Rental({
    customer,
    car,
    pickupDate,
    dropoffDate,
    discounts,
    additionalCharges,
    totalAmount,
  });

  // save to db use async await
  try {
    const rental = await newRental.save();
    success(res, "Rental created successfully", rental);
  } catch (err) {
    error(res, err.message, err.statusCode || 500);
  }
});

export default router;
