const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-user");
  if (!token) {
    return res.status(401).send("Unauthorized!");
  }

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token!");
  }
};
