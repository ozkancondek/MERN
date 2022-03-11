const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

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
exports.authLogin = (req, res) => {
  res.send("register completed");
};
