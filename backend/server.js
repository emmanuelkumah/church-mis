import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

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
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
