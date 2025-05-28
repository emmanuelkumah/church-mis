import UserModel from "../../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
export const register = async (req, res) => {
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
