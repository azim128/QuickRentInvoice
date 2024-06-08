import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    car: {
      type: { type: String, required: true },
      model: { type: String, required: true },
      rates: {
        daily: { type: Number, required: true },
        weekly: { type: Number, required: true },
        hourly: { type: Number, required: true },
      },
    },
    timeframe: {
      pickupDate: { type: Date, required: true },
      dropoffDate: { type: Date, required: true },
      totalrenttime: { type: String, required: true },
    },
    bill: {
      totalEstimateChare: { type: Number, required: true },
      discounts: { type: Number, default: 0 },
      additionalCharges: { type: Number, default: 0 },
      totalAmount: { type: Number, required: true },
      message: { type: String, required: true },
    },
    reservation: {
      recipt: { type: String, required: true },
      claim: { type: String, required: true },
      reservationDate: { type: Date, required: true },
      reservationNumber: { type: String, default: 1 },
    },
  },
  { timestamps: true }
);

const Rental = mongoose.model("Rental", RentalSchema);

export default Rental;
