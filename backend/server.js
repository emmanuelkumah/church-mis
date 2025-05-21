import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//router
import csRoutes from "./routes/csRoutes.js";
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middleware to handle routing
app.use("/api/v1/cs", csRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
});
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
  });
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit the process with failure
}
