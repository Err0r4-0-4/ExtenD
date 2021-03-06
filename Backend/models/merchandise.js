const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const merchandiseSchema = new Schema({
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
  price: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Merchandise", merchandiseSchema);
