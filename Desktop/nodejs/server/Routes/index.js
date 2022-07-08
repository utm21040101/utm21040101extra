const express = require("express");
const app = express();
const usuario = require("./usuario");
const Categorias = require("./categoria");


app.use("/usario",usuario); // http://localhost:3000/usuario
app.use("/categoria",Categorias); // http://localhost:3000/categoria

module.exports = app;