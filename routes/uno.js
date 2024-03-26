const express = require("express");
const router = express.Router();

const createController = require("../controllers/uno");

// ruta crear
router.get("/uno", createController.uno);

module.exports = router;