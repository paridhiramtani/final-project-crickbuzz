const mongoose = require("mongoose");

const pointTable = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  logo: { type: String, required: true },
  country: { type: String, required: true },
  won: { type: String, required: true },
  lost: { type: String, required: true },
  nrr: { type: String, required: true },
  points: { type: String, required: true },
  rp: { type: String, required: true },
  results: [
    { type: String, required: true },
    { type: String, required: true },
    { type: String, required: true },
    { type: String, required: true },
    { type: String, required: true },
  ],
});

module.exports = mongoose.model('pointTable' , pointTable)
