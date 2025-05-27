import { Router } from "express";

const router = Router();
import {
  getAllCSMembers,
  createCSMember,
  getCSMember,
  updateCSMember,
  deleteCSMember,
} from "../controllers/CSControllers/CSController.js";
import { validateCSMember } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllCSMembers).post(validateCSMember, createCSMember);
router
  .route("/:id")
  .get(getCSMember)
  .patch(validateCSMember, updateCSMember)
  .delete(deleteCSMember);

export default router;
