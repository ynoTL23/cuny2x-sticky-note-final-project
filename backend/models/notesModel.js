const Sequelize = require("sequelize");
const db = require("../config/database.js");

const savedNotes = db.define("mainBoard", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  userIPinfo: {
    type: Sequelize.JSON
  },
  posts: {
    type: Sequelize.TEXT
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

savedNotes.sync().then(function() {
  console.log("The Notes Table Exists");
});

module.exports = savedNotes;
