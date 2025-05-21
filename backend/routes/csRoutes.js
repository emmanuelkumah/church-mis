import { Router } from "express";

const router = Router();
import {
  getAllCSMembers,
  createCSMember,
  getCSMember,
  updateCSMember,
  deleteCSMember,
} from "../controllers/CSControllers/CSController.js";

router.route("/").get(getAllCSMembers).post(createCSMember);
router
  .route("/:id")
  .get(getCSMember)
  .patch(updateCSMember)
  .delete(deleteCSMember);

export default router;
