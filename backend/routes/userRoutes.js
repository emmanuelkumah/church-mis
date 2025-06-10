import { Router } from "express";

const router = Router();

import {
  getCurrentUser,
  updateUser,
  getApplicationStats,
} from "../controllers/userController/userController.js";

router.get("/current-user", getCurrentUser);
router.patch("/update-user", updateUser);
router.get("/application-stats", getApplicationStats);

export default router;
// This file defines the user routes for getting the current user, updating user information, and fetching application statistics.
