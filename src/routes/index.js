const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/customers", require("./customers"))

module.exports = routes
