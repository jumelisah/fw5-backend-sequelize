const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const Users = require("./users")

const Transactions = sequelize.define("transactions", {
  total: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        msg: "Total cannot be empty!"
      },
    },
    allowNull: false
  },
  paymentStatus: {
    type: Sequelize.ENUM("1", "0"),
    validate: {
      isIn: [
        ["1", "0"]
      ],
    },
    defaultValue: "0",
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        msg: "UserId cannot be empty!"
      }
    },
    allowNull: false
  }
})

Users.hasMany(Transactions)

module.exports = Transactions
