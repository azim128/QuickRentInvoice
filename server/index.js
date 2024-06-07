import cors from "cors";
// import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.config.js";
import { PORT } from "./config/variable.config.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./middlewares/errorHandlers.middleware.js";
import { success } from "./middlewares/responseHandler.middleware.js";
import CarRouters from "./routers/car.routes.js";
import RentalRouters from "./routers/rental.routes.js";

const app = express();


// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/cars", CarRouters);
app.use("/api/v1/rentals", RentalRouters);

// health check
app.get("/health", (req, res) => {
  success(res, "Server Running", "OK!");
});

// Not found handler
app.use(notFoundHandler);

// Global error handler
app.use(globalErrorHandler);

// db connect then listen

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});

