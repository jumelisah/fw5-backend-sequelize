const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const Users = require("./users")

const Phones = sequelize.define("phones", {
    userId: {
        type: Sequelize.INTEGER
        // references: {
        //     model: Users,
        //     key: "id"
        // }
    },
    number: Sequelize.STRING
})

module.exports = Phones
