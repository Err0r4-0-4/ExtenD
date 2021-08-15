const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema({
  userId: {
    type: String,
    require: true,
  },
  creatorName: {
    type: String,
    require: true,
  },
  creatorId: {
    type: String,
    require: true,
  },
  userName: {
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
