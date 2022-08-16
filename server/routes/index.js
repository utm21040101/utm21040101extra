const express = require("express");
const app = express();
const empleado = require ("./empleado");
const proyecto = require ("./proyecto");
const departamento = require ("./departamento");

app.use("/empleado", empleado);
app.use("/departamento", departamento);
app.use("/proyecto", proyecto);



module.exports = app;