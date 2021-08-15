const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema({
  userId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
