const router = require('express').Router();

const taskController = require('../controller/taskController');

router.get('/', taskController.getAllTasks)

router.get('/:id/detail', taskController.getTaskDetail)

router.post('/new-task', taskController.postNewTask)

router.post('/handle-form-actions', taskController.handleFormAction)

router.put('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)

module.exports = router;