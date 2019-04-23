const express = require("express");
let exphbs = require("express-handlebars");

const burgerDB = require("./models/burger.js");
const router = require("./controllers/burgers_controller");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use(router);

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
app.set("view engine", "handlebars");

burgerDB.addBurger({name: "Farty", state: true}, (results) => console.log(results));

burgerDB.changeBurger({name: "Juan", state: false, id: 2}, (results => console.log(results)));

burgerDB.getAllBurgers((results) => console.log(results));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});