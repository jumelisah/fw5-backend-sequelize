const Transactions = require("../models/transaction")
const Sequelize = require("sequelize")

exports.getAllTransactions = async (req, res) => {
  try {
    const {
      userId
    } = req.body

    const results = await Transactions.findAll({
      where: {
        userId: {
          [Sequelize.Op.eq]: userId
        }
      }
    })

    return res.send({
      success: true,
      message: "List all transactions",
      results
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send({
      success: false,
      message: "Error"
    })
  }
}

// exports.getTransaction = async (req, res) => {}

exports.createTransaction = async (req, res) => {
  try {
    const {
      userId,
      total,
    } = req.body

    const transaction = await Transactions.create({
      userId,
      total,
    })

    return res.send({
      success: true,
      message: "Transaction created!",
      results: transaction
    })

  } catch (err) {
    console.error(err)
    return res.status(500).send({
      success: false,
      message: "Error",
      results: err.errors.map(e => ({
        field: e.path,
        message: e.message
      }))
    })
  }
}

exports.updateTransaction = async (req, res) => {
  try {
    const {
      id
    } = req.params

    const {
      userId,
      paymentStatus
    } = req.body

    const results = await Transactions.update({
      paymentStatus
    }, {
      where: {
        id: {
          [Sequelize.Op.eq]: id
        },
        userId: {
          [Sequelize.Op.eq]: userId
        }
      }
    })

    if (results[0]) {
      const updatedTransaction = await Transactions.findByPk(id)

      return res.send({
        success: true,
        message: "Transaction updated!",
        results: updatedTransaction
      })
    } else {
      return res.send({
        success: false,
        message: "Transaction not found!",
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send({
      success: false,
      message: "Error"
    })
  }
}

exports.deleteTransaction = async (req, res) => {
  try {
    const {
      id
    } = req.params

    const transaction = await Transactions.findByPk(id)

    if (transaction) {
      await transaction.destroy()

      return res.send({
        success: true,
        message: "Transaction deleted!",
        results: transaction
      })
    } else {
      return res.send({
        success: false,
        message: "Transaction not found!",
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send({
      success: false,
      message: "Error"
    })
  }
}
