const ProductCategories = require('../models/productCategory')
const Sequelize = require("sequelize")

exports.getAllProductCategories = async(req, res)=> {
    const {category=""} = req.query
    const results = await ProductCategories.findAll({
        where: {
            category: {
                [Sequelize.Op.like]: `%${category}%`
            }
        },
        limit: 5,
        offset: 0
    })
    return res.send({
        success: true,
        message: "List all Product Category",
        results
    })
}

exports.createProductCategory = async(req, res)=>{
    try{
        const productCategories = await ProductCategories.create(req.body)
        return res.send({
            success: true,
            message: "Product Category created!",
            results: productCategories
        })
    }catch(e){
        return res.status(400).send({
            success: false,
            message: "Error",
            results: e.errors.map(err => ({field: err.path, message: err.message}))
        })
    }
}

exports.updateProductCategories = async (req, res)=> {
    const {id} = req.params
    const productCategories = await ProductCategories.findByPk(id)
    if(productCategories){
        for(let key in req.body){
            productCategories[key] = req.body[key]
        }
        await productCategories.save()
        return res.send({
            success: true,
            message: "Product Category updated!",
            results: productCategories
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product Catwgory not found!"
        })
    }
}

exports.productCategoriesDetail = async(req, res)=> {
    const {id} = req.params
    const productCategories = await ProductCategories.findByPk(id)
    if(productCategories){
        return res.send({
            success: true,
            message: "Product Categories Detail",
            results: productCategories
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product Category not found!"
        })
    }
}

exports.deleteProductCategories = async(req, res)=> {
    const {id} = req.params
    const productCategories = await ProductCategories.findByPk(id)
    if(productCategories){
        await productCategories.destroy()
        return res.send({
            success: true,
            message: "Product Categories Deleted!"
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Product Categories not found!"
        })
    }
}
