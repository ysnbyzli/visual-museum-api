const Mongoose = require("mongoose");

const CategorySchema = Mongoose.Schema(
  {
    title: { type: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("categories", CategorySchema);
