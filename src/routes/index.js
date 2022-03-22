const routes = require("express").Router()

// routes.use("/users", require("./users"))
routes.use("/product-categories",require("./productCategories"))

module.exports = routes
