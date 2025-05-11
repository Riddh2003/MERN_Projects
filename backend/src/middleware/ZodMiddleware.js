const validationSchema = (schema) => async (req,res,next) =>{
    try{
        await schema.parseAsync(req.body)
        next()
    }catch(err){
        res.json({
            message:"validation error",
            data:err
        })
    }
}
module.exports = validationSchema;