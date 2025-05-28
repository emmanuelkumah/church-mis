import UserModel from "../../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
// Register and login controllers for user authentication
export const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  //random value added to the password to make it more secure
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  // Create a new user with the provided data
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
