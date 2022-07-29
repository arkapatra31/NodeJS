const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Order = sequelize.define("TABLE_NAME", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports =  Order;