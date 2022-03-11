const express = require("express");

const router = express.Router();

const ProfileController = require("../controllers/ProfileController");

//base url: api/profile

/**
 * @route GET /api/auth/register
 * @desc register endpoint
 * @accsess private
 */

router.post("/", (req, res) => {
  res.send("profile page");
});

module.exports = router;
