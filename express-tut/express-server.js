//! Here we will create a simple server, no frontend attached!
//! 1st file of express-tut folder


const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log("User landed on home page")
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    console.log("User landed on about page")
    res.send("About Page")
})

app.get('/contact', (req,res)=>{
    console.log("User landed on contact page")
    res.send("Contact Page")
})

app.all('*', (req, res)=>{
    console.log("Whatever path you go, you'll get this response")
    res.status(404).send('<H1> Resource not found </H1>')
})


app.listen(5002, ()=>{
    console.log("Server running on port 5002")
})

//! Next file (or folder) is the express-server-frontend one!
