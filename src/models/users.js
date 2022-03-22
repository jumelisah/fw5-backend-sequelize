const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")
const Phones = require("./phones")


const Users = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Name cannot be empty!"
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: {
      msg: "Email already exists!"
    },
    validate: {
      isEmail: {
        msg: "Email not valid!"
      },
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      min: 4
    }
  }
})

Users.hasOne(Phones)

module.exports = Users
