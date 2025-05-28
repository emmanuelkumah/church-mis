import { Router } from "express";

const router = Router();
import {
  getAllCSMembers,
  createCSMember,
  getCSMember,
  updateCSMember,
  deleteCSMember,
} from "../controllers/CSControllers/CSController.js";
import {
  validateCSMember,
  validateIdParams,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllCSMembers).post(validateCSMember, createCSMember);
router
  .route("/:id")
  .get(validateIdParams, getCSMember)
  .patch(validateIdParams, validateCSMember, updateCSMember)
  .delete(validateIdParams, deleteCSMember);

export default router;
