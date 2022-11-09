const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//model creation
const agriculture_data_schema = new Schema({
  date: { type: Date, default: Date.now },
  province: { type: String, default: "Sindh" },
  station: { type: String },
  minimun: { type: Number, default: 0 },
  maximun: { type: Number, default: 0 },
});

// const agriculture_data = mongoose.model("Agriculture", agriculture_data_schema);

// exports.default = agriculture_data;

module.exports = mongoose.model("Agriculture", agriculture_data_schema);
