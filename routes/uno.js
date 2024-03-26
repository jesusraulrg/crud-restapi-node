const express = require("express");
const router = express.Router();

const createController = require("../controllers/uno");

// ruta uno
router.get("/uno/:id", createController.uno);

module.exports = router;