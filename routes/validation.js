const express = require('express');

const router = express.Router();

const UserContoller = require('../controllers/ValidationController');

//Agregar un usuario nuevo
router.post('/', ValidationController.postRequest);

module.exports = router;