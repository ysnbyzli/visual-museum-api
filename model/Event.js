const Mongoose = require("mongoose");

const EventSchema = Mongoose.Schema({
  title: { type: String },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  photos: [{ type: String }],
  tags: [{ type: String }],
  person: {
    type: Mongoose.Types.ObjectId,
    ref: "persons",
  },
});

module.exports = Mongoose.model("events", EventSchema);
