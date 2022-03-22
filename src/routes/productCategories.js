const productCategories = require("express").Router()

const {getAllProductCategories,productCategoriesDetail,createProductCategory,updateProductCategories,deleteProductCategories} = require("../controllers/productCategories")

productCategories.get("/", getAllProductCategories)
productCategories.get("/:id", productCategoriesDetail)
productCategories.post("/", createProductCategory)
productCategories.patch("/:id", updateProductCategories)
productCategories.delete("/:id", deleteProductCategories)

module.exports = productCategories
