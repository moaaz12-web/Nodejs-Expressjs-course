//! Here we create a server using express, with some frontend!
//! 2nd file of express-tut folder


const express = require('express')
const path = require('path')
const app = express()

//! app.use is used for setting up the middleware.
//! Static asset is a file that the server does not need to change it, it only reads them...that's all!
//! We can also insert index.html in public and comment app.get code and the server will still work
app.use(express.static('./public'))

app.get('/', (req,res)=>{
    res.sendFile('index.html', { root: __dirname });
})

app.all('*', (req,res)=>{
    res.status(404).send("<p>Resource not found</p>")
})

app.listen(6003, ()=>{
    console.log("Server running on port 6003")
})


//! Next file is, 