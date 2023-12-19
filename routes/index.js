const express = require('express');

const router = express.Router();

const TaskRoutes = require('./taskRoutes');
const UserRoutes = require('./userRoutes');
const validation = require('./validation');

router.use('/tasks', TaskRoutes);
router.use('/users', UserRoutes);
router.use('/validation', validation);


module.exports = router;