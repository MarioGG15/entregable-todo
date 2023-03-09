const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");
const categoryRoutes = require("./routes/category.routes");

initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {console.log("Database connected")})
    .catch((error) => console.log(error));

db.sync({ alter: false })
    .then(() => console.log("Database synchronized"))
    .catch((error) => console.log(error));

app.use(userRoutes);    
app.use(todoRoutes);
app.use(categoryRoutes);

app.get('/', (req, res) => {

    res.send("Welcome to my API");

});

app.listen(PORT, () => {

    console.log(`Server working on the port ${PORT}`);

});