exports.isAdmin = (req, res, next)=> {
    if(req.authUser.role === "Admin"){
        return next()
    }else{
        return res.status(401).send({
            success: false,
            message: "Unauthorized"
        })
    }
}
