const Mongoose = require("mongoose");

const PersonSchema = new Mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    description: { type: String },
    dateOfBirth: { type: Date },
    dateOfDeath: { type: Date },
    photo: { type: String },
    category: {
      type: Mongoose.Types.ObjectId,
      ref: "categories",
    },
    tags: [{ type: Mongoose.Types.ObjectId, ref: "tags" }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("persons", PersonSchema);
