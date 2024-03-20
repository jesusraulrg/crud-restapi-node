const express = require("express");
const router = express.Router();

const PruebaController = require("../controllers/prueba");

// ruta de prueba
router.get("/prueba", PruebaController.prueba);

module.exports = router;