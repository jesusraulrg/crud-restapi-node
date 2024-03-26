const Articulo = require("../models/modelo_articulo"); // importar el modelo de articulo


const listar = (req, res) => {
	Articulo.find({})
		.sort({ fecha: -1 })
		.then((articulos) => {
			if (!articulos) {
				return res.status(404).json({
					status: "error",
					mensaje: "No se han encontrado artículos",
				});
			}
			let count = articulos.length;
			return res.status(200).send({
				status: "Success",
				numero: count,
				articulos,
			});
		})
		.catch((error) => {
			return res.status(500).json({
				status: "error",
				mensaje: "Ha ocurrido un error al listar los artículos",
				error: error.message,
			});
		});
};

module.exports = {
    listar
};
