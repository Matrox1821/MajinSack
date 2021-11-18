const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

let guardar;
//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); //Para recibir y enviar datos .json
//Routes
/* app.use("api/tasks", require("./routes/tasks.routes.js")); */
//Static files
app.use(express.static(path.join(__dirname, "../public")));

//--------

app.get("/GPS", (req, res) => {
  /* req.query.fecha; 
  req.query.tiempo; 
  req.query.latitud;
  req.query.longitud; */
  const { fecha, tiempo, latitud, longitud } = req.query;
  guardar = { fecha, tiempo, latitud, longitud };
});

app.get("/obtener_datos_gps", (req, res) => {
  res.json(guardar);
});

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
