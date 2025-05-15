import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data received", data: req.body });
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
