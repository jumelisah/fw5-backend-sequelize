const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

// const Users = require("./users")

const Blog = sequelize.define("blog", {
    title: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Name cannot be empty!"
            }
        }
    },
    content: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Content cannot be empty"
            },
        }
    },
    categoryId: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Category ID cannot be empty"
            },
        }
    },
    // userId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: Users,
    //         key: "id"
    //     }
    // },
})

module.exports = Blog
