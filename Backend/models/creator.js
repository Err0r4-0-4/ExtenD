const mongoose = require("mongoose");

const schema = mongoose.Schema;

const creatorSchema = new schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  account: {
    type: String,
    require: true,
  },
  contractAddress: {
    type: String,
    require: true,
  },
  goodAt: {
    type: String,
    require: true,
  },
  fieldOfIntrest: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
    default: "",
  },
});

module.exports = mongoose.model("Creator", creatorSchema);
