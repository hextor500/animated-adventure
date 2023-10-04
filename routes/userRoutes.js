const express = require('express');

const router = express.Router();

const UserContoller = require('../controllers/UserController');

//Agregar un usuario nuevo
router.post('/', UserContoller.addUser);

module.exports = router;