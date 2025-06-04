import UserModel from "../../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { hashPassword, comparePassword } from "../../utils/passwordUtils.js";
import { UnauthenticatedError } from "../../errors/customError.js";
import { createToken } from "../../utils/tokenUtils.js";
// Register and login controllers for user authentication
export const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  //random value added to the password to make it more secure

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  // Create a new user with the provided data
  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      msg: "User registered successfully",
    },
  });
};

export const login = async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
  });
  if (!user) throw new UnauthenticatedError("Invalid credentials");
  // Here you would typically check the password and generate a token
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

  const token = createToken({ userId: user._id, role: user.role });

  const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  // Set the token in a cookie
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay), // Cookie expires in 1 day
    secure: process.env.NODE_ENV === "production", // Set secure flag in production
  });
  res.status(StatusCodes.OK).json("User logged in successfully");
};
