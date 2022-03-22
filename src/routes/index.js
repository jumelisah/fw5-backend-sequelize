const routes = require("express").Router()


// routes.use("/users", require("./users"))
routes.use("/product-categories",require("./productCategories"))
routes.use("/users", require("./users"))
routes.use("/customers", require("./customers"))
routes.use("/transactions", require("./transactions"))
routes.use("/blogImages", require("./blogImages"))
routes.use("/product", require("./product"))
routes.use("/blog", require("./blog"))


module.exports = routes
