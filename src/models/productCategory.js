const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const ProductCategories = sequelize.define("product_categories", {
    category: {
        type: Sequelize.STRING, 
        unique:{
          msg:'Category already exist!'
        },
        validate: {
          notEmpty: {
              msg: "Category must be filled!"
          }
        }
    },
})


module.exports = ProductCategories
