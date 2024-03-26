const { conection } = require('./database/conection');
const express = require('express');
const cors = require('cors');

// inicializar app
console.log('Inicializando app de node');

// conectar a la base de datos
conection();

// crear servidor de node
const app = express();
const port = 3900;

// convertir el body en un objeto js
app.use(express.json()); // el app.use sirve para crear un middleware
app.use(express.urlencoded({extended: true}));

// configurar cors
app.use(cors());

// crear rutas
app.get("/probando", (req, res) => {
    console.log("Se está ejecutando el endpoint probando");
    return res.status(200).json({
        message: "Probando ruta node.js",
        author: "jesusraulrg"
    });
})


// rutas
const ruta_prueba = require("./routes/prueba");
app.use("/api", ruta_prueba);

const ruta_crear = require("./routes/crear");
app.use("/api", ruta_crear);

const ruta_uno = require("./routes/uno");
app.use("/api", ruta_uno);

const ruta_borrar = require("./routes/borrar");
app.use("/api", ruta_borrar);

const ruta_listar = require("./routes/listar");
app.use("/api", ruta_listar);


// escuchar las peticiones HTTP
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
})

