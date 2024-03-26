// Este es el controlador para eliminar documentos de la base de datos
const Articulo = require("../models/modelo_articulo"); // importar el modelo de articulo


const borrar = (req, res) => {
    const id = req.params.id;
    Articulo.findOneAndDelete({ _id: id }) // Usamos _id como filtro
        .then((articuloEliminado) => {
            if (!articuloEliminado) {
                return res.status(404).json({
                    status: "Error",
                    message: "Articulo no encontrado",
                });
            }
            return res.status(200).json({
                status: "Success",
                id,
                message: "Articulo eliminado con éxito: " + id
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: "Error",
                message: "Error al eliminar el artículo: " + error.message,
            });
        });
};


module.exports = {
    borrar
};