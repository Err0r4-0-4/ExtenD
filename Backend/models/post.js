const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  creatorId: {
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
  Link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
