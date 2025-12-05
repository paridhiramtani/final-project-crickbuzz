// const { MongoGCPError } = require("mongodb");
const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  flag1: { type: String, required: true },
  flag2: { type: String, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  venue: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('matches' , matchesSchema)
