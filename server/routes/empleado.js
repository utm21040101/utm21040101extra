const { request } = require("express");
const express = require("express");
const router = express.Router();
const empleadoModel = require("../models/empleado.Models");
const parseId = (id)=>{
    return mongoose.Types.ObjectId(id)
}

router.get("/:id", (request, response) => {

        const{id} = req.params
       const body = req.body
       usuariomodel.findOne(
        {id: parseId(req.params.id)},
        body,
        (err, docs)=>{
            res.send({
                items : docs
            })
        }
    )
});

router.get("/", (request, response) => {
   
   
    const registro =  empleadoModel.find().exec()
   .then((registro) => {
       return response.status(200).json({
           msg:"Se consulto la tabla de empleados exitosamente",
           status: 200, 
           cont: {
                registro
              
           }
       });

   })
   .catch((err) => {
           return response.status(500).json({
               msg:"Error al consultar los datos de los empleados.",
               status: 500,
               cont: {
                   error: err
               }
           });
   });

});

router.post("/", (request, response) => {
    const empleado = new empleadoModel(request.body);

    console.log(empleado);
    empleado.save()
    .then((EmpleadoRegistrado) => {
       return response.status(200).json({
            msg:"Se ha registrado correctamente el empleado",
            status: 200,
            cont: {
                empleado: EmpleadoRegistrado
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar el empleado",
            status: 400,
            cont: {
                error: err
            }
        });
    });
});


router.put('/', (req, res) => {
    const{id} = req.params
    const body = req.body
    empleadoModel.updateOne(
     {id: parseId(req.params.id)},
     body,
     (err, docs)=>{
         res.send({
             items : docs
         })
     }
    )
 });

 router.delete('/:id', (req, res) => {
    let id = req.params.id
    empleadoModel.findByIdAndDelete(id, (err, empleadoModel)=>{
        if (err) return res.status(500).send({message:'Error la realizar la peticion: $'})
        if (!empleadoModel) return res.status(404).send({message: 'El empleado no existe'})
    
        res.status(200).send({message : "Se elimino Correctamente"})
    }) 
});

module.exports = router; 