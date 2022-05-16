const Mongoose = require("mongoose");

const TagSchema = new Mongoose.Schema(
  {
    title: String,
    color: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("tags", TagSchema);
