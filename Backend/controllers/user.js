const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email.toLowerCase(), password.toLowerCase());
  const user = new User({
    email: email.toLowerCase(),
    password: password.toLowerCase(),
  });
  try {
    await user.save();
    res.status(200).send({ id: user.id });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  let email = req.body.email.toLowerCase();
  let password = req.body.password.toLowerCase();
  //console.log(email, password);
  const user = await User.findOne({
    $and: [{ email: email }, { password: password }],
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const token = jwt.sign({ username: user.email, userId: user._id }, "secret", {
    expiresIn: "1h",
  });
  return res
    .status(200)
    .json({
      message: "User Loggedin Successfully!",
      token: token,
      userId: user._id.toString(),
    });
};
