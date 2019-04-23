const ORM = require("../config/orm.js");

const getAllBurgers= function(cb) {
    ORM.selectAll("burgers", cb);
}

const addBurger = function(burgerObj, cb) {
    ORM.insertOne("burgers", {
        burger_name: burgerObj.name,
        devoured: false
    }, cb);
}

const changeBurger = function(burgerObj, cb) {
    let updatedBurger = {
        id: parseInt(burgerObj.id)
    }

    if(burgerObj.name)
        updatedBurger.burger_name = burgerObj.name;
    if(burgerObj.state)
        updatedBurger.devoured = Boolean(burgerObj.state);

    
    ORM.updateOne("burgers", updatedBurger, cb);
}

module.exports = {
    getAllBurgers,
    addBurger,
    changeBurger,
}