const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/blog", require("./blog"))

module.exports = routes
