const blogImages = require("express").Router()

const blogImagesC = require("../controllers/blogImages")

blogImages.post("/", blogImagesC.createBlogImages)
blogImages.get("/", blogImagesC.getAllBlogImages)
blogImages.get("/:id", blogImagesC.blogImagesDetail)
blogImages.patch("/:id", blogImagesC.updateBlogImages)
blogImages.delete("/:id", blogImagesC.deleteBlogImages)

module.exports = blogImages
