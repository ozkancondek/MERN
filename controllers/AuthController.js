const User = require("../models/UserModel");

const bcrypt = require("bcryptjs");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //TODO
  //-validate the fields
  //- check if user aldready registered
  const userData = await User.findOne({ email });
  if (userData) {
    return res
      .status(400)
      .json({ error: [{ message: "user aldready exist" }] });
    //return res.send("user aldready exist ")
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
