const Categories = require("../models/categories.model");

class CategoriesServices {
    static async create(newCategory) {
        try {
            const categoryCreated = await Categories.create(newCategory);
            return categoryCreated
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CategoriesServices;