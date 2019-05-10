const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  colorTheme: { type: Array, required: true },
  imageURL: { type: String, required: true },
  colorURL: { type: String },
  date: { type: Date, default: Date.now }
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
