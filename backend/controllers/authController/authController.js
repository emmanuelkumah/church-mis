import UserModel from "../../models/UserModel.js";
import { StatusCodes } from "http-status-codes";

// Register and login controllers for user authentication
export const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      user,
    },
  });
};

export const login = async (req, res) => {
  res.send("Login endpoint hit");
};
