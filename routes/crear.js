const express = require("express");
const router = express.Router();

const createController = require("../controllers/crear");

// ruta crear
router.post("/crear", createController.crear);

module.exports = router;