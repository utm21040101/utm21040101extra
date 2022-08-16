//configuracion de donde se encunetra el puerto 
process.env.PORT = process.env.PORT || 3003;

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

if (process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb+srv://utm21040101:Jp4493572544@utm21040101extraordinar.9wzbrro.mongodb.net/?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://utm21040101:Jp4493572544@utm21040101extraordinar.9wzbrro.mongodb.net/?retryWrites=true&w=majority";
}

