const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/blogImages", require("./blogImages"))

module.exports = routes
