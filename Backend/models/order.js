const mongoose = require("mongoose");

const schema = mongoose.Schema;

const orderSchema = new schema({
  userId: {
    type: String,
    ref: "User",
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
});

module.exports = mongoose.model("Order", orderSchema);
