const TodosServices = require("../services/todo.services");

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodosServices.getAll();
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
};

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodosServices.create(newTodo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        await TodosServices.update(newData, id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodosServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createTodo,
    getAllTodos,
    updateTodo, 
    deleteTodo
};