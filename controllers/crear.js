const validator = require('validator');
const Articulo = require("../models/modelo_articulo"); // importar el modelo de articulo

const crear = (req, res) => {
    console.log("Se está ejecutando el endpoint crear");

    // recoger parametros por post a guardar
    let parametros = req.body;

    // validacion de datos
    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, { min: 1, max: undefined });
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        if (!validar_titulo || !validar_contenido) {
            throw new Error('Los datos no son válidos');
        }

    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }

    // crear el objeto a guardar
    const articulo = new Articulo(parametros);

    // guardar el articulo en la base de datos
    articulo.save()
        .then(ArticuloGuardado => {
            return res.status(200).json({
                status: 'success',
                message: "El artículo se ha guardado correctamente",
                articulo: ArticuloGuardado
            });
        })
        .catch(error => {
            return res.status(400).json({
                status: 'error',
                message: "No se ha guardado el articulo" + error.message,
            });
        })        
};


module.exports = {
    crear,
};
