const mongoose = require("mongoose");
const parseId= (id) => {return mongoose.Types.ObjectId(id)}

const CategoriasSchema = mongoose.Schema({
    strProjectName:{
        type:String,
        required: [true, "Es necesario ingresar tu Departamento"]
    },
    strDepartamento:{
        type:String,
        required: [true, "descripcion"]
    }
})


module.exports = mongoose.model("proyecto", CategoriasSchema);