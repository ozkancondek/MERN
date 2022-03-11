const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

//routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */
router.post(
  "/register",
  [
    check(
      //middleware
      "password",
      "please enter the password with 6 and more character"
    ).isLength({ min: 6 }),
    check(
      //middleware
      "email",
      "please enter a valid email"
    ).isEmail(),
  ],
  AuthController.authRegister
);

/**
 * @route POST /api/auth/login
 * @desc login endpoint
 * @access Public/Private
 */
router.post(
  "/login",
  [
    check(
      //middleware
      "password",
      "please enter the password with 6 and more character"
    ).isLength({ min: 6 }),
    check(
      //middleware
      "email",
      "please enter a valid email"
    ).isEmail(),
  ],
  AuthController.authLogin
);

module.exports = router;
