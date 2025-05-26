import "express-async-errors";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { validateTest } from "./middleware/validationMiddleware.js";
//router
import csRoutes from "./routes/csRoutes.js";

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middleware to handle routing
app.use("/api/v1/cs", csRoutes);

app.post(
  "/api/v1/test",
  validateTest, // validation middleware
  (req, res) => {
    const { name } = req.body;
    res.status(200).json({
      status: "success",
      message: `Hello ${name}, this is a test route!`,
    });
  }
);
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
