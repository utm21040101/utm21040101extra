const express = require("express");
const departamentoModels = require("../models/departamento.Models");
const router = express.Router();

router.get("/:id", (request, response) => {

    const{id} = req.params
   const body = req.body
   departamentomodel.findOne(
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

    const departamento = new departamentoModels(req.body);
    departamento.save()
    .then((departamentoRegistrado) => {
       return response.status(200).json({
            msg:"Se ha registrado el departamento correctamente",
            status: 200,
            cont: {
                departamento: departamentoRegistrado
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar el departamento",
            status: 400,
            cont: {
                error: err
            }
        });
    });

});



router.get("/", (request, response) => {
   
   
     const registro =  departamentoModels.find().exec()
    .then((registro) => {
        return response.status(200).json({
            msg:"Se consulto la tabla de departamentos exitosamente",
            status: 200, 
            cont: {
                 registro
               
            }
        });

    })
    .catch((err) => {
            return response.status(500).json({
                msg:"Error al consultar los datos del departamento",
                status: 500,
                cont: {
                    error: err
                }
            });
    });

});

router.put('/', (req, res) => {
    let body = req.body;
    departamentoModels.findByIdAndUpdate({ _id: "62d58d06a6cbfaa685390187" }, {
            //ID DE PRUEBA CONECTADO A BD "62d58d06a6cbfaa685390187"
            $set: req.body
        },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el registro del departamento',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha modificado el nombre del departamento correctamente',
                    info: info
                })
            }
        }
    )
});

router.delete('/', (req, res) => {
    departamentoModels.findByIdAndRemove({ _id: "" },{new: true},
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo eliminar el departamento',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msg: 'Se ha eliminado el departamento correctamente'
                })
            }
        }
    )
});

module.exports = router;
