const transactions = require("express").Router()

const transactionController = require("../controllers/transactions")

transactions.get("/", transactionController.getAllTransactions)
transactions.post("/", transactionController.createTransaction)
transactions.patch("/:id", transactionController.updateTransaction)
transactions.delete("/:id", transactionController.deleteTransaction)

module.exports = transactions
