const { request, response } = require("express");
const express = require("express");
const UsuarioModel = require("../models/Usuario.model");
const router = express.Router();

//API con parametros obligatorios
router.get("/usuario/:id/:nombre/:apellido/:edad",(request, response) =>{
    //const id = request.params.id;
    //const nombre =  request.params.nombre;
    //const edad = request.params.edad;
    //const apellido= request.params.apellido;

    //Destructuracion (Con este comando no es necesario escribie muchas lineas de codigo como se muestra anterirmente)
  
    const {id,nombre,edad,apellido} = request.params;

    if(Number(edad).toString() === "NaN"){
        returnresponse.status(400).json({
            "message":"Ingreso un caracter nulo dentro de Edad"
        })

    }
   
    response.status(200).json({
        "message":"Estas dentro de la Api GET Especifico de Usario",
        id ,
        nombre,
        apellido,
        edad: Number(edad)
    })
})

//res y resp son igual que response(resp) y resquest(res)
//API con parametros opcionales
router.get("/usarioBusqueda",(req,resp) => {
    const id = req.query.id;
    const nombre= req.query.nombre;
    
    resp.status(200).json({
        "message":"Se consulto la API usarioBusqueda Exitosamente",
        id,
        nombre
    })
})
router.get("/",(request,response) => {
    
    UsuarioModel.find()

    response.status(200).json({
        "message" : "Estas dentro de la api GET Usuario"
    });
})
router.post("/usuario",(request,response) => {
    
    const usuario= new UsuarioModel(request.body);

    usuario.save()
    
    .then((usuarioRegistrado) => {
        response.status(200).json({
            msg : "Usuario registrado ",
            status:200,
            cont: {
                usuario: usuarioRegistrado
            }
        });
    })
    .catch(()=>{
        response.status(500).json({
            msg : "Error de Registro ",
            status:500,
        });
    })
});
router.put("/api/usario",(request,response) => {
    
    response.status(200).json({
        "message" : "Estas dentro de la api PUT Usuario"
    });
})
router.delete("/api/usario",(request,response) => {
    
    response.status(200).json({
        "message" : "Estas dentro de la api DELETE Usuario"
    });
})

router.post("/login",(request,response) => {

    const email = request.body.correoelectornico;
    const password = request.body.password;

    UsuarioModel.findOne({"email":email,"password":password})
    .then ((usuarioLogeado) =>{ 
        if(usuarioLogeado == null){
            return response.status(500).json({
                message : "Autenticacion Fallida",

            });

        }else{
            
                return response.status(200).json({
                    message : "Autenticacion Exitosa",
                  
                 });
        }
    })
    });

module.exports = router;