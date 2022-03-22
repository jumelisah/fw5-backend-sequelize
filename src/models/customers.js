const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const Customers = sequelize.define("customers", {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "First name must be filled!" 
            }
        }
    },
    lastName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Last name must be filled!" 
            }
        } 
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                msg: "Email is not valid!"
            }
        },
        unique: {
            msg: "Email already exists"
        }
    },
    birthDate: {
        type: Sequelize.DATE,
    },
    address: {
        type: Sequelize.TEXT,
    }
})

module.exports = Customers
