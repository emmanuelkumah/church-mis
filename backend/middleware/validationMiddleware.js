import { body, validationResult } from "express-validator";

export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
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
