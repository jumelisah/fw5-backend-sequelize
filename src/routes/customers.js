const customer = require("express").Router()

const customersController = require("../controllers/customers")

customer.get("/", customersController.getAllCustomers)

module.exports = customer
