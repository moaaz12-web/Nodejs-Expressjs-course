const express= require('express');
const router = express.Router();


router.post('', (req,res)=>{
    console.log(req.body.name)
    if(req.body.name){
        return res.status(200).send(`<h1> Welcome ${req.body.name}!</h1>`)
    }
    res.status(404).send("<h1>Please enter a name</h1>")
})

module.exports = router