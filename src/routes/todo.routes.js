const { Router } = require("express");
const {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo
} = require("../controllers/todo.controllers");

const router = Router();

router.get('/api/v1/todos', getAllTodos);

router.post("/api/v1/todos", createTodo);

router.put('/api/v1/todos/:id', updateTodo);

router.delete('/api/v1/todos/:id', deleteTodo);

module.exports = router;