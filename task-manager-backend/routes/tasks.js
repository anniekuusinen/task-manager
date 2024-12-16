const express = require('express');
const { getTasks } = require('../controllers/taskController');
const router = express.Router();

router.get("/tasks", getTasks);

module.exports = router;