const Mongoose = require("mongoose");

const PersonSchema = new Mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    dateOfBirth: { type: Date },
    image: { type: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("persons", PersonSchema);
