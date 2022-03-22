const Users = require("../models/users")
const Phones = require("../models/phones")
const Sequelize = require("sequelize")

exports.getAllUsers = async (req, res) => {
  const {
    search = ""
  } = req.query
  const results = await Users.findAll({
    where: {
      name: {
        [Sequelize.Op.like]: `${search}%`
      }
    },
    limit: 5,
    offset: 0
  })
  return res.send({
    success: true,
    message: "List all users",
    results
  })
}

exports.getAllUsersWithPhone = async (req, res) => {
  try {
    const results = await Users.findAll({
      include: Phones,
      attributes: {
        exclude: ["password"]
      }
    })
    return res.send({
      success: true,
      message: "List all users with Phone",
      results
    })
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      success: false,
      message: "Error"
    })
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body)
    return res.send({
      success: true,
      message: "User created!",
      results: user
    })
  } catch (e) {
    return res.status(400).send({
      success: false,
      message: "Error",
      results: e.errors.map(err => ({
        field: err.path,
        message: err.message
      }))
    })
  }
}

exports.updateUser = async (req, res) => {
  const {
    id
  } = req.params
  const user = await Users.findByPk(id)
  if (user) {
    for (let key in req.body) {
      user[key] = req.body[key]
    }
    await user.save()
    return res.send({
      success: true,
      message: "User updated!",
      results: user
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "User not found!"
    })
  }
}

exports.userDetail = async (req, res) => {
  const {
    id
  } = req.params
  const user = await Users.findByPk(id)
  if (user) {
    return res.send({
      success: true,
      message: "User Detail",
      results: user
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "User not found!"
    })
  }
}

exports.deleteUser = async (req, res) => {
  const {
    id
  } = req.params
  const user = await Users.findByPk(id)
  if (user) {
    await user.destroy()
    return res.send({
      success: true,
      message: "User Deleted!"
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "User not found!"
    })
  }
}
