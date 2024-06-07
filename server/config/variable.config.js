// import variable like PORT, DB_URL,BB_NAME from environment
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/";
const DB_NAME = process.env.DB_NAME || "car-rental";

const DB_URI = `${DB_URL}${DB_NAME}`;

export { DB_URI, PORT };
