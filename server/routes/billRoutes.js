const { Router } = require("express");
const {
  getAllBills,
  getBillById,
  saveBill,
  updateBill,
  deleteBillById,
  getBillsByInstituteId,
  getPrintBillDetails,
  filterBillsByRange,
  filterBillsByDate,
  filterInstituteBillsByRange,
  filterInstituteBillsByDate,
} = require("../controllers/billController");
const { protectRoute } = require("../middleware/authMiddleware");
const router = Router();

router.route("/").get(protectRoute, getAllBills).post(protectRoute, saveBill);
router
  .route("/:id")
  .get(protectRoute, getBillById)
  .put(protectRoute, updateBill)
  .delete(protectRoute, deleteBillById);
router.get("/institutes/:id", protectRoute, getBillsByInstituteId);
router.post("/print/", protectRoute, getPrintBillDetails);
router.get("/filter/range", protectRoute, filterBillsByRange);
router.get("/filter/date", protectRoute, filterBillsByDate);
router.get(
  "/filter/institute/range",
  protectRoute,
  filterInstituteBillsByRange
);
router.get("/filter/institute/date", protectRoute, filterInstituteBillsByDate);

module.exports = router;
