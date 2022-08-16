const mongoose= require("mongoose");
const parseId= (id) => {return mongoose.Types.ObjectId(id)}

const EmpleadoSchema = mongoose.Schema({
    strNombre : {
        type: String,
        required: [true,"Es necesario ingresar el Nombre"]
    },
    strJobTitle :{
        type: String,
        required: [true,"Es necesario ingresar el JobTitle"]
    },
    nmbSalario:{
        type: Number,
        required: [true,"Es necesario ingresar el Salario"]
    },
    nmbEdad :Number,

    idDepartamento:{
        type: mongoose.Types.ObjectId, 
        required:[true, "descripcion"]
    },

    credenciales: 
        {
            strCorreo : {type: String, required : true , unique: false },
            strPassword : {type: String, required : true, unique: false}
        }
    

})

module.exports = mongoose.model("empleado", EmpleadoSchema);