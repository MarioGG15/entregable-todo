const CategoriesServices = require("../services/category.services");

const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.create(newCategory);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = createCategory;