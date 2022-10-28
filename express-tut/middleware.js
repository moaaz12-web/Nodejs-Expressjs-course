//! Heart and soul of express
//! request ---> middleware ---->response


const express = require('express')
const {logger} = require('./logger')   //! This is a middleware function
const {authorize} = require('./authorize')   //! This is another middleware function
const app = express()

//! app.use(logger)   //! This function will just insert the logger funtion in every route
app.use([logger, authorize])   //! app.use can also have an array of middleware functions


// app.get('/', logger, (req,res)=>{
//     res.send("Home Page")
// })

// app.get('/about', logger, (req,res)=>{
//     res.send("About Page")
// })

// app.get('/api/products', logger, (req,res)=>{
//     res.send("About Page")
// })

// app.get('/api/items', logger, (req,res)=>{
//     res.send("About Page")
// })

app.get('/', (req,res)=>{
    res.send("Home Page")
})
app.get('/about', (req,res)=>{
    res.send("About Page")
    
})


app.get('/api/products', (req,res)=>{
    res.send("About Page")
})

app.get('/api/items', (req,res)=>{
    res.send("About Page")
})

app.listen(5001, ()=>{
    console.log("Server listening on port 5001")
})


//! Let's keep the logger function in a separate file. 
//! Also, let's find a method that can automatically add logger funtion to all routes without having to type logger in every api route, and that is app.use(logger)

//! Middleware.js is a helper file.
//! Authorize.js is a helper file.