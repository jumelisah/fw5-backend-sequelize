const routes = require("express").Router()


// routes.use("/users", require("./users"))
routes.use("/product-categories",require("./productCategories"))
routes.use("/users", require("./users"))
routes.use("/transactions", require("./transactions"))
routes.use("/blogImages", require("./blogImages"))
routes.use("/product", require("./product"))

module.exports = routes
