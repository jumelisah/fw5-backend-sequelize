const customer = require("express").Router()

const customersController = require("../controllers/customers")

customer.get("/", customersController.getAllCustomers)
customer.post("/", customersController.createCustomer)
customer.patch("/:id", customersController.updateCustomer)

module.exports = customer
