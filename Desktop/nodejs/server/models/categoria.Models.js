const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, "Es necesario ingresar tu Nombre"]
    },
    descripcion:{
        type:String,
        required: [true, "descripcion"]
    },
    tiposdecategoria:{
        type:String,
        required: [true, "es una bonita categoria"]
    },
    activo: false
})


module.exports = mongoose.model("Categorias", CategoriasSchema);