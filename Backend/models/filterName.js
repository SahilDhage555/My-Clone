const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Filter-Names", filterSchema);
