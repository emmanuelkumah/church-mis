import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customError.js";
import UserModel from "../models/UserModel.js";
import CSModel from "../models/CSModel.js";
export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages.startsWith("no member with id")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages.startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateCSMember = withValidationErrors([
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),
  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),
  body("middleName").notEmpty().withMessage("Middle name is required"),
  body("dateOfBirth")
    .notEmpty()
    .withMessage("Date of birth is required")
    .isDate()
    .withMessage("Date of birth must be a valid date"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 0, max: 14 })
    .withMessage("Age must be a number between 0 and 14"),
  body("fathersName")
    .notEmpty()
    .withMessage("Father's name is required")
    .isLength({ min: 2 }),
  body("mothersName").notEmpty().withMessage("Mother's name is required"),
  body("contact")
    .optional()
    .isMobilePhone("any")
    .withMessage("Contact must be a valid phone number"),
  body("residence").notEmpty().withMessage("Residence is required"),
  body("image").optional().isURL().withMessage("Image must be a valid URL"),
  body("gender").isIn(["gender", "male"]).withMessage("invalid gender"),
]);

export const validateIdParams = withValidationErrors([
  param("id")
    .custom((value) => {
      return mongoose.Types.ObjectId.isValid(value);
    })
    .withMessage("Invalid ID format"),
]);
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const csMember = await CSModel.findById(value);
    if (!csMember) throw new NotFoundError(`no member with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === csMember.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw UnauthorizedError("not authorized to access this route");
  }),
]);
//validate user registration
export const validateUserRegistration = withValidationErrors([
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .custom(async (email) => {
      const user = await UserModel.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already in use");
      }
    }),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
]);
//validate login
export const validateUserLogin = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("firstName").notEmpty().withMessage("name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await UserModel.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
]);
