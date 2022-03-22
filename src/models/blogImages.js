const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

// const Blogs = require("./blogs")

const BlogImages = sequelize.define("blogImages", {
    blogId: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "blogId cannot be empty!"
            },
            isNumeric : {
                msg: "Invalid data types!"
            }
        }
    },
    images: {
        type : Sequelize.STRING
    }
})

module.exports = BlogImages
