const express = require("express");
const proyectomodels = require("../models/proyecto.Models");
const router = express.Router()


router.get("/:id", (request, response) => {

    const{id} = req.params
   const body = req.body
   proyectomodel.findOne(
    {id: parseId(req.params.id)},
    body,
    (err, docs)=>{
        res.send({
            items : docs
        })
    }
)
});

router.post('/', (req, response) => {

    const Proyecto= new proyectomodels(req.body);
    Proyecto.save()
    .then((ProyectoRegistrdo) => {
       return response.status(200).json({
            msg:"Se ha registrado el proyecto correctamente",
            status: 200,
            cont: {
                Proyecto: ProyectoRegistrdo
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar el proyecto",
            status: 400,
            cont: {
                error: err
            }
        });
    });

});


router.get("/", (request, response) => {
   
   
     const registro =  proyectomodels.find().exec()
    .then((registro) => {
        return response.status(200).json({
            msg:"Se consulto la tabla de Proyectos exitosamente",
            status: 200, 
            cont: {
                 registro
               
            }
        });

    })
    .catch((err) => {
            return response.status(500).json({
                msg:"Error al consultar Proyectos.",
                status: 500,
                cont: {
                    error: err
                }
            });
    });

});

router.put('/', (req, res) => {
    let body = req.body;
    proyectomodels.findByIdAndUpdate({ _id: "62d58d06a6cbfaa685390187" }, {
            
            $set: req.body
        },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el registro del Proyecto',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha modificado el Proyecto correctamente',
                    info: info
                })
            }
        }
    )
});

router.delete('/', (req, res) => {
    proyectomodels.findByIdAndRemove({ _id: "" },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo eliminar el proyecto',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha eliminado el proyecto correctamente'
                })
            }
        }
    )
});

module.exports = router;