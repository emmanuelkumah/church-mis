import "express-async-errors";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
//router
import csRoutes from "./routes/csRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
//middleware for logging requests in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middleware to handle routing
app.use("/api/v1/cs", authenticateUser, csRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", authenticateUser, userRoutes);
//create dummy route
app.use("/api/v1/test", (req, res) => {
  res.json({ message: "Test route is working!" });
});
//middleware for error handling
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

//connect to MongoDB and start the server
try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
  });
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit the process with failure
}
