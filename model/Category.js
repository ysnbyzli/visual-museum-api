const Mongoose = require("mongoose");

const CategorySchema = Mongoose.Schema({
  title: { type: String },
});

module.exports = Mongoose.model("categories", CategorySchema);
