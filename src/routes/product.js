const product = require("express").Router()

const productController = require("../controllers/product")

product.get("/", productController.getAllProducts)
product.post("/", productController.createProduct)
product.patch("/:id", productController.updateProduct)
product.get("/:id", productController.detailProduct)
product.delete("/:id", productController.deleteProduct)

module.exports = product
