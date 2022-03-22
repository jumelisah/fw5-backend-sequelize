const customer = require("express").Router()

const customersController = require("../controllers/customers")

customer.get("/", customersController.getAllCustomers)
customer.post("/", customersController.createCustomer)
customer.get("/:id", customersController.getUserById)
customer.patch("/:id", customersController.updateCustomer)
customer.delete("/:id", customersController.deleteCustomer)

module.exports = customer
