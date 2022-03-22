const BlogImages = require("../models/blogImages")

exports.createBlogImages = async(req, res)=>{
    try{
        const blogImages = await BlogImages.create(req.body)
        return res.send({
            success: true,
            message: "Blog Image created!",
            results: blogImages
        })
    }catch(e){
        return res.status(400).send({
            success: false,
            message: "Error",
            results: e.errors.map(err => ({field: err.path, message: err.message}))
        })
    }
}

exports.getAllBlogImages = async (req, res)=> {
    const results = await BlogImages.findAll()
    return res.send({
        success: true,
        message: "List all blog images",
        results
    })
}

exports.blogImagesDetail = async(req, res)=> {
    const {id} = req.params
    const blogImages = await BlogImages.findByPk(id)
    if(blogImages){
        return res.send({
            success: true,
            message: "Blog image Detail",
            results: blogImages
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Blog image not found!"
        })
    }
}

exports.updateBlogImages = async (req, res)=> {
    const {id} = req.params
    const blogImages = await BlogImages.findByPk(id)
    if(blogImages){
        for(let key in req.body){
            blogImages[key] = req.body[key]
        }
        await blogImages.save()
        return res.send({
            success: true,
            message: "Blog image updated!",
            results: blogImages
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Blog images not found!"
        })
    }
}

exports.deleteBlogImages = async(req, res)=> {
    const {id} = req.params
    const blogImages = await BlogImages.findByPk(id)
    if(blogImages){
        await blogImages.destroy()
        return res.send({
            success: true,
            message: "Blog image Deleted!"
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Blog image not found!"
        })
    }
}
