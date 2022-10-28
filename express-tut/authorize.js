const authorize = (req,res,next)=>{
    const {user} = req.query;

    if(user === 'john'){
        req.user = {name:'john', id:1}
        next()
    }
    else{
        res.status(404).send("Unauthorized")
    }
    console.log("autorize")
    next()
}

module.exports= {authorize}


//! This is a helper file for middleware.js