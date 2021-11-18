const mongoose = require("mongoose");
const URI = "mongodb://localhost/mis-medidas";
mongoose
  .connect(URI)
  .then((db) => console.log("La base de datos está conectada"))
  .catch((err) => console.error(err));
module.export = mongoose;
