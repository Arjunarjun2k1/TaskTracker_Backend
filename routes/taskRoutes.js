const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.route('/').post(taskController.createTask)
router.route('/:id').get(taskController.getTask).put(taskController.editTask)

module.exports = router