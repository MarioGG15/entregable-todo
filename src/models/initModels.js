const Users = require("./users.model");
const Todos = require("./todos.model");
const Categories = require("./categories.model");

const initModels = () => {

    Users.hasMany(Todos, { foreignKey:"responsible" });
    Todos.belongsTo(Users, { foreignKey:"responsible" });

    Categories.hasMany(Todos, { foreignKey:"categoryId" });
    Todos.belongsTo(Categories, { foreignKey:"categoryId" });

};

module.exports = initModels;