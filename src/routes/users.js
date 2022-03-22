const users = require("express").Router()

const userController = require("../controllers/users")

users.get("/", userController.getAllUsers)
users.get("/with-phone", userController.getAllUsersWithPhone)
users.post("/", userController.createUser)
users.patch("/:id", userController.updateUser)
users.get("/:id", userController.userDetail)
users.delete("/:id", userController.deleteUser)

module.exports = users
