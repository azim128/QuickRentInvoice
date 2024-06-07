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
    },
    pickupDate: { type: Date, required: true },
    dropoffDate: { type: Date, required: true },
    discounts: { type: Number, default: 0 },
    additionalCharges: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Rental = mongoose.model("Rental", RentalSchema);

export default Rental;
