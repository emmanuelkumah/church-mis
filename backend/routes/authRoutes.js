import { Router } from "express";
import {
  register,
  login,
} from "../controllers/authController/authController.js";
import { validateUserRegistration } from "../middleware/validationMiddleware.js";
const router = Router();
// Define the routes for authentication

router.post("/register", validateUserRegistration, register);
router.post("/login", login);
// Export the router to be used in the main server file
export default router;
// This file defines the authentication routes for user registration and login.
