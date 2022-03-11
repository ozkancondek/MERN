const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { exists } = require("../models/UserModel");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //-validate the fields

  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //- check if user aldready registered
  const userData = await User.findOne({ email });
  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "user aldready exist" }] });
  }
  //-crypt password
  const salt = await bcrypt.genSalt(10);

  const newPassword = await bcrypt.hash(password, salt);

  //-save user to db
  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword,
  });
  await user.save();

  res.send("register completed");
};
exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  //-validate the fields

  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //-user exist
  const userData = await User.findOne({ email });
  if (!userData) {
    return res.status(400).json({ errors: [{ message: "user dosnt exist" }] });
  }
  //-password compare
  const isPasswordMatch = await bcrypt.compare(password, userData.password);
  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ errors: [{ message: "invalid credentials" }] });
  }
  //-authentication return JSON WEB TOKEN-JWT
  res.send("register completed");
};
