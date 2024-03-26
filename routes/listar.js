const express = require("express");
const router = express.Router();

const createController = require("../controllers/listar");

// ruta crear
router.get("/listar", createController.listar);

module.exports = router;