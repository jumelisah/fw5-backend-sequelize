const Product = require("../models/product")
const Sequelize = require("sequelize")

exports.getAllProducts = async (req,res) => {
    try {
        const {search=""} = req.query
        const results = await Product.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `${search}%`
                }
            }
        })
        return res.json({
            success: true,
            message: "List all products",
            results
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Unexpected Error",
        })
    }
}

exports.createProduct = async(req, res)=>{
    try{
        const product = await Product.create(req.body)
        return res.send({
            success: true,
            message: "Product created!",
            results: product
        })
    }catch(e){
        return res.status(400).send({
            success: false,
            message: "Error",
            results: e.errors.map(err => ({field: err.path, message: err.message}))
        })
    }
}

exports.updateProduct = async (req, res)=> {
    const {id} = req.params
    const product = await Product.findByPk(id)
    if(product){
        for(let key in req.body){
            product[key] = req.body[key]
        }
        await product.save()
        return res.send({
            success: true,
            message: "Product updated!",
            results: product
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product not found!"
        })
    }
}

exports.detailProduct = async(req, res)=> {
    const {id} = req.params
    const product = await Product.findByPk(id)
    if(product){
        return res.send({
            success: true,
            message: "Product Detail",
            results: product
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product not found!"
        })
    }
}

exports.deleteProduct = async(req, res)=> {
    const {id} = req.params
    const product = await Product.findByPk(id)
    if(product){
        await product.destroy()
        return res.send({
            success: true,
            message: "Product Deleted!"
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product not found!"
        })
    }
}
