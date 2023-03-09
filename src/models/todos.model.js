const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todos = db.define("todos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    responsible: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    }
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: "posted_at"
});

module.exports = Todos;