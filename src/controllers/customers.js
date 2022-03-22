const Customers = require("../models/customers")
// const Sequelize = require("sequelize")

exports.getAllCustomers = async (req, res) => {
    try {
        const results = await Customers.findAll({
            attributes: {
                exclude: ["password"]
            }
        })
        return res.send({
            success: true,
            message: "List Customers",
            results
        })
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

// exports.getUserById = async (req, res) => {
//   const {id} = req.params
//   const customer = await Customers.findByPk(id)
//   if(id) {
//     return res.send({
//       success: true,
//       message: 'Customer detail',
//       results: customer
//     })
//   } else {
//     return res.status
//   }
// }
