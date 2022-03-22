const blog = require("express").Router()

const blogController = require("../controllers/blog")

blog.get("/", blogController.getAllBlog)
blog.post("/", blogController.createBlog)
blog.patch("/:id", blogController.updateBlog)
blog.get("/:id", blogController.blogDetail)
blog.delete("/:id", blogController.deleteBlog)

module.exports = blog
