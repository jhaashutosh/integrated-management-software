const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { protectRoute } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router
  .route("/profile/:id")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

module.exports = router;
