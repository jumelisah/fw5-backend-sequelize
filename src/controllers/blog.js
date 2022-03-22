const Blog = require("../models/blog")
const Sequelize = require("sequelize")

exports.getAllBlog = async(req, res)=> {
    const {search=""} = req.query
    const results = await Blog.findAll({
        // include: [
        //     {Users}
        // ],
        where: {
            title: {
                [Sequelize.Op.like]: `%${search}%`
            }
        },
    //     limit: 5,
    //     offset: 0
    })
    return res.send({
        success: true,
        message: "List all blog post",
        results
    })
}

exports.createBlog = async(req, res)=>{
    try{
        const blog = await Blog.create(req.body)
        return res.send({
            success: true,
            message: "blog created!",
            results: blog
        })
    }catch(e){
        return res.status(400).send({
            success: false,
            message: "Error",
            results: e.errors.map(err => ({field: err.path, message: err.message}))
        })
    }
}

exports.updateBlog = async (req, res)=> {
    const {id} = req.params
    const blog = await Blog.findByPk(id)
    if(blog){
        for(let key in req.body){
            blog[key] = req.body[key]
        }
        await blog.save()
        return res.send({
            success: true,
            message: "blog updated!",
            results: blog
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Blog post not found!"
        })
    }
}

exports.blogDetail = async(req, res)=> {
    const {id} = req.params
    const blog = await Blog.findByPk(id)
    if(blog){
        return res.send({
            success: true,
            message: "blog Detail",
            results: blog
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "blog not found!"
        })
    }
}

exports.deleteBlog = async(req, res)=> {
    const {id} = req.params
    const blog = await Blog.findByPk(id)
    if(blog){
        await blog.destroy()
        return res.send({
            success: true,
            message: "Blog Deleted!"
        })
    }else{
        return res.status(404).send({
            success: false,
            message: "Blog not found!"
        })
    }
}
