const prueba = (req, res) => {
    console.log("Se está ejecutando el endpoint articulo");
    return res.status(200).json({
        message: "Probando ruta node.js",
    });
};

module.exports = {
    prueba
};