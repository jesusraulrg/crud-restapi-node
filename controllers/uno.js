//Controlador para buscar un solo artículo a través del id
const uno = (req, res) => {
    // Recoger un id por la url
    let id = req.params.id;
    // Buscar artículo
    Articulo.findById(id)
        .then((articulo) => {
            // Si no existe, devolver error
            if (!articulo) {
                return res.status(400).json({
                    status: "Error",
                    mensaje: "No se ha encontrado el artículo",
                });
            }
            // Devolver resultado
            return res.status(200).json({
                status: "Success",
                articulo,
            });
        })
        .catch((error) => {
            return res.status(400).json({
                status: "Error",
                mensaje: "Ha ocurrido un error al buscar el artículo",
            });
        });
};


module.exports = {
    uno
};