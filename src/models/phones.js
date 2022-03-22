const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

// const Users = require("./users")

const Phones = sequelize.define("phones", {
    userId: Sequelize.INTEGER,
    number: Sequelize.STRING
})

module.exports = Phones
