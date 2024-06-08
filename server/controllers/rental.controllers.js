import { AppError } from "../middlewares/errorHandlers.middleware.js";
import { error, success } from "../middlewares/responseHandler.middleware.js";
import Rental from "../models/rental.models.js";
import calculateTotalCost from "../utils/calculateTotalCost.js";
import randomString from "../utils/generateRandomString.js";

export const createRental = async (req, res) => {
  const {
    customer,
    car,
    pickupDate,
    dropoffDate,
    rentper = "daily",
    discounts = 0,
    additionalCharges = 0,
  } = req.body;

  if (!customer || !car || !pickupDate || !dropoffDate) {
    return error(res, new AppError("Please provide all required fields", 400));
  }

  const {
    totalEstimatePrice,
    discountAmount,
    additionalCharges: additionalCost,
    totalPrice,
    message,
    rentalDuration,
  } = calculateTotalCost(
    car.rates,
    rentper,
    pickupDate,
    dropoffDate,
    discounts,
    additionalCharges
  );

  const timeframe = {
    pickupDate,
    dropoffDate,
    totalrenttime: rentalDuration,
  };

  const bill = {
    totalEstimateChare: totalEstimatePrice,
    discounts: discountAmount,
    additionalCharges: additionalCost,
    totalAmount: totalPrice,
    message: message,
  };

  const reservation = {
    recipt: randomString,
    claim: randomString,
    reservationDate: new Date(pickupDate),
  };

  const newRental = new Rental({
    customer,
    car: { type: car.type, model: car.model, rates: car.rates },
    timeframe,
    bill,
    reservation,
  });

  try {
    const rental = await newRental.save();
    success(res, "Rental created successfully", {
      rental,
      totalEstimatePrice,
      discountAmount,
      additionalCost,
      totalPrice,
      message,
      rentalDuration,
    });
  } catch (err) {
    error(res, new AppError("Error creating rental", err.statusCode || 500));
  }
};
