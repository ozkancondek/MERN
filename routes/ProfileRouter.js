const express = require("express");

const router = express.Router();

const ProfileController = require("../controllers/ProfileController");

const auth = require("../middleware/authMiddleware");

//base url: api/profile

/**
 * @route GET /api/auth/profile
 * @desc register endpoint
 * @accsess private
 */

router.get("/", auth, (req, res) => {
  res.send(req.decodedUser);
});

module.exports = router;
