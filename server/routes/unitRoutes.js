const express = require("express");
const {
  getUnits,
  getUnitById,
  addInstitute,
  deleteInstitute,
  editInstitute,
} = require("../controllers/unitController");
const { protectRoute } = require("../middleware/authMiddleware");
const router = express.Router();

router
  .route("/")
  .get(protectRoute, getUnits)
  .post(protectRoute, addInstitute)
  .delete(protectRoute, deleteInstitute)
  .put(protectRoute, editInstitute);
router.get("/:id", protectRoute, getUnitById);

module.exports = router;
