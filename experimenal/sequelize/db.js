const Sequelize = require("sequelize");

const sequelize = new Sequelize("DB_NAME", "USERNAME", "PASSWORD", {
    dialect : "mysql",
    host : "localhost"
})

try{
    await sequelize.authenticate();
}catch(ex){
    console.log("Unable to connect Sequelize")
}

module.exports = sequelize;
