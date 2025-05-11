const testMiddleware = (req, res, next) => {
    if(req.body.name){
        console.log("name is present")
        next()
    }else{
        res.json({
            message:"name is not present"
        })
    }
}

module.exports = testMiddleware;