const express = require('express');
const router = express.Router();

const  controller = require('./controller')

router.get('/todos', controller.getTodos)

router.get('/todo/:id', controller.getTodoById)

router.post('/todo', controller.createTodo)

router.put('/todo/:id', controller.updateTodo)

router.delete('/todo:id', controller.deleteTodo)

module.exports = router;
