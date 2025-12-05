const mongoose = require("mongoose");

const playersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  role: { type: String, required: true },
  totalRun: { type: Number, required: true },
  totalMatch: { type: Number, required: true },
  photo: { type: String, required: true },
  totalWickets: { type: String },
});

module.exports = mongoose.model("player",playersSchema)
