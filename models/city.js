const Sequelize = require("sequelize");

module.exports = function (sequelize) {
    const City = sequelize.define (
        "cities",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true,
            },
            naziv: Sequelize.STRING,
            brojStanovnika: Sequelize.INTEGER
        },
        { freezeTableName: true, timestamps: false }
    );
    return City;
};