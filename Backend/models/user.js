const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
