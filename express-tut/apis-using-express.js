const express= require('express')
const app = express()
const {products} = require('../data')

app.get('/', (req,res)=>{
    res.send("<h1>Welcome to home page</h1> <br></br> <a href='/api/products'> Click Me To See Data </a>")
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})

app.get('/api/filtered/products', (req,res)=>{
    const filtered = products.map((item)=>{
        const {id, name, image} = item;
        return {id, name, image}
    })
    res.json(filtered)
})

// app.get('/api/products/1', (req,res)=>{
//     const first_item = products.find((item)=>{item.id == 1})
//     res.json(first_item)
// })


app.get('/api/products/:productID', (req,res)=>{
    const {productID} = req.params;
    const user_specified_item = products.find((item)=>{item.id === Number(productID)})
    if(!user_specified_item){
        res.status(404).send("Item not found")
    }
    return res.json(user_specified_item)
})

app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((item)=>{
            return item.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length<1){
        // return res.status(200).send("No items found")
        return res.status(200).json({success:true, data:[]})
    }
    res.json(sortedProducts)
})

app.listen(5001, ()=>{
    console.log("Server running")
})


//! After this comes, middleware.js