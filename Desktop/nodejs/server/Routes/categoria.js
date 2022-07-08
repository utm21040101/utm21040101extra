const express = require("express");
const router = express.Router();

router.get("/api/categoria", (request, response) => {

    response.status(200).json({
        "message" : "Estas dentro de la api Get Categorias"
    });
});

router.post("/api/categoria",(request,response) => {
    
    response.status(200).json({
        "message" : "Estas dentro de la api POST Categorias"
    });
})
router.put("/api/categoria",(request,response) => {
    
    response.status(200).json({
        "message" : "Estas dentro de la api PUT Categorias"
    });
})
router.delete("/api/categoria",(request,response) => {
    
    response.status(200).json({
        "message" : "Estas dentro de la api DELETE Categorias"
    });
})
module.exports = router;