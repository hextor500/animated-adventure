const express = require('express');

const router = express.Router();

const TaskRoutes = require('./taskRoutes');
const UserRoutes = require('./userRoutes')

router.use('/tasks', TaskRoutes);
router.use('/users', UserRoutes);

module.exports = router;