import { StatusCodes } from "http-status-codes";
import UserModel from "../../models/UserModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "update user" });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get application stats" });
};
