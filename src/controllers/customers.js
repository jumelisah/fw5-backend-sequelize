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

exports.getUserById = async (req, res) => {
    const {id} = req.params
    try {
        const customer = await Customers.findByPk(id)
        if(id) {
            return res.send({
                success: true,
                message: "Customer detail",
                results: customer
            })
        } else {
            return res.status(404).send({
                success: false,
                message: "Customer undifined"
            })
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customers.create(req.body)
        return res.send({
            success: true,
            message: "Successfully add customers",
            results: customer
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: "Error",
            results: err.errors.map(e => ({field: e.path, message: e.message}))
        })
    }
}

exports.updateCustomer = async (req, res) => {
    const {id} = req.params
    try {
        const customer = await Customers.findByPk(id)
        if (customer) {
            for (let change in req.body) {
                customer[change] = req.body[change]
            }
            await customer.save()
            return res.send({
                success: true,
                message: "Customer successfully updated",
                results: customer
            })
        } else {
            return res.send({
                success: false,
                message: "Customer not found"
            })
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

exports.deleteCustomer = async (req, res) => {
    const {id} = req.params
    const customer = await Customers.findByPk(id)
    if (customer) {
        await customer.destroy()
        return res.send({
            success: true,
            message: "Customer successfully deleted"
        })
    } else {
        return res.status(404).send({
            success: false,
            message: "Customer undifined"
        })
    }
}
