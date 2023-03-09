const Todos = require("../models/todos.model");
const Users = require("../models/users.model");
const Categories = require("../models/categories.model");

class TodosServices {

    static async getAll() {
        try {
            const result = await Todos.findAll({
                include: [
                    {
                        model: Users,
                        as: "responsible",
                        attributes: ["username"]
                    },
                    {
                        model: Categories,
                        attributes: ["name"]
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(newTodo) {
        try {
            const todoCreated = await Todos.create(newTodo);
            return todoCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(newData, id) {
        try {
            const result = await Todos.update(newData, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = Todos.destroy({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

};

module.exports = TodosServices;