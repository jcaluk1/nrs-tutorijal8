const Sequelize = require("sequelize");

const connection = new Sequelize("Jasmin", "root", "root", {
    host: "db.db",
    dialect: "sqlite",
});

const db = {};
db.connection = connection;

db.City = connection.import(__dirname + "/models/city.js");

module.exports = db;