const Sequelize = require("sequelize");

const path = (process.env.NODE_ENV === "test") ? "./test/db.db" : "./db.db";

const connection = new Sequelize("Jasmin", "root", "root", {
    dialect: "sqlite",
    storage: path
    
});

const db = {};
db.connection = connection;

db.City = connection.import(__dirname + "/models/city.js");

module.exports = db;