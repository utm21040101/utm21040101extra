const mongoose = require("mongoose");
const parseId= (id) => {return mongoose.Types.ObjectId(id)}

const CategoriasSchema = mongoose.Schema({
    strDeptName:{
        type:String,
        required: [true, "Es necesario ingresar el Departamento"]
    },
    
})


module.exports = mongoose.model("departamento", CategoriasSchema);