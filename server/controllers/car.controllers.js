import { AppError } from "../middlewares/errorHandlers.middleware.js";
import { error, success } from "../middlewares/responseHandler.middleware.js";

export const getAllCars = async (req, res) => {
  try {
    const response = await fetch(
      "https://exam-server-7c41747804bf.herokuapp.com/carsList"
    );
    const data = await response.json();
    console.log(data);
    success(res, "Cars fetched successfully", data.data);
  } catch (err) {
    console.log(err);
    error(res, new AppError("An error occurred to fetched data", err.statusCode || 500));
  }
};

export const getCarById = async (req, res) => {
  // fetch car list then filter by id
  try {
    const response = await fetch(
      "https://exam-server-7c41747804bf.herokuapp.com/carsList"
    );
    const data = await response.json();
    const car = data.data.find((car) => car.id === req.params.id);
    if (!car) {
      return error(res, new AppError("Car not found", 404));
    }
    success(res, "Car fetched successfully", car);
  } catch (err) {
    error(res, new AppError("An error occurred", err.statusCode || 500));
  }
};
