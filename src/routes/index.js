const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/product", require("./product"))

module.exports = routes
