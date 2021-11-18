const mongoose = require("mongoose");
const { Schema } = mongoose;

const medicionesSchema = new Schema({
  tempDHT11: { type: Number, required: true },
  humDHT11: { type: Number, required: true },
  tempDS18B20: { type: Number, required: true },
  inclinacion: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Mediciones", medicionesSchema);
