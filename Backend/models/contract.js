const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contractSchema = new schema({
  userId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  hash: {
    type: String,
    require: true,
  },
  fileUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Contract", contractSchema);
