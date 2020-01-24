const Sequelize = require("sequelize");
module.exports = new Sequelize("postgres", "admin", "password", {
  dialect: "postgres",
  // "dialectOptions": {
  // 	"ssl": true
  //   },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
