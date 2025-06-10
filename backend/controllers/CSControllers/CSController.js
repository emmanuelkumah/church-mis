import CSModel from "../../models/CSModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../../errors/customError.js";
//get all cs members
export const getAllCSMembers = async (req, res) => {
  const csMembers = await CSModel.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({
    status: "success",
    results: csMembers.length,
    data: {
      csMembers,
    },
  });
};
//create a new cs member
export const createCSMember = async (req, res) => {
  console.log(req.user);
  req.body.createdBy = req.user.userId;

  // Set the createdBy field to the userId from the request
  const csMember = await CSModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ csMember });
};
//get a single cs member
export const getCSMember = async (req, res) => {
  const { id } = req.params;
  const csMember = await CSModel.findById(id);
  if (!csMember) throw new NotFoundError(`No cs member found with ID ${id}`);
  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      csMember,
    },
  });
};
//update a cs member
export const updateCSMember = async (req, res) => {
  const { id } = req.params;
  const updatedCSMember = await CSModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedCSMember)
    throw new NotFoundError(`No cs member found with ID ${id}`);
  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      csMember: updatedCSMember,
    },
  });
};
//delete a cs member
export const deleteCSMember = async (req, res) => {
  const { id } = req.params;
  const deleteCSMember = await CSModel.findByIdAndDelete(id);
  if (!deleteCSMember)
    throw new NotFoundError(`No cs member found with ID ${id}`);

  res.status(StatusCodes.OK).json({ csMember: deleteCSMember });
};
