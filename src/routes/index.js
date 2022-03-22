const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/transactions", require("./transactions"))

module.exports = routes
