const express = require('express');

const router = express.Router();

const ValidationController = require('../controllers/ValidationController');

//Agregar un usuario nuevo
router.post('/', ValidationController.postRequest);

module.exports = router;