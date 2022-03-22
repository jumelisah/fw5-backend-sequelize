const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")
// const Category = require("./category.js")

const Product = sequelize.define("products", {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Name cannot be empty!"
            }
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull:true,
    },
    stock: {
        type: Sequelize.INTEGER,
        validate: {
            isNumeric: {
                msg: "Stock must be a number"
            },
            min: 0
        }
    },
    price: {
        type: Sequelize.DECIMAL,
        validate: {
            isDecimal: {
                msg: "Price must be a number or decimal value"
            },
            min: 0
        }
    }
})

// Product.hasOne(Category)

module.exports = Product
