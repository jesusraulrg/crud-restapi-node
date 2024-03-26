const express = require("express");
const router = express.Router();

const createController = require("../controllers/borrar");

// ruta crear
router.delete("/borrar/:id", createController.borrar);

module.exports = router;