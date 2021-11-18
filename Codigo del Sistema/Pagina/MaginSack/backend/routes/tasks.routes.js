const express = require("express");
const router = express.Router();
const Task = require("../models/Mediciones");
router.get("/", (req, res) => {
  res.json({
    status: "API Works",
  });
});
router.post(
  "/mediciones/:tempDHT11/:humDHT11/:tempDS18B20/:inclinacion",
  async (req, res) => {
    const titleSensor = req.params.titleSensor;
    const dateSensor = req.params.dateSensor;
    const task = new Task(titleSensor, dateSensor);
    const tasks = new Task(title, date);
    console.log(task);
    await task.save();
    await tasks.save();
    res.redirect("/Mediciones");
  }
);
router.get("/mediciones", (req, res) => {});
module.exports = router;
