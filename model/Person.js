const Mongoose = require("mongoose");

const PersonSchema = new Mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    dateOfDeath: { type: Date },
    photo: { type: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("persons", PersonSchema);
