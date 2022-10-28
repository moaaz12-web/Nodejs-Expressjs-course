const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end("<h1>Welcome to home page</h1>")
    }

    if(req.url === '/about'){
        res.end("<h1>Welcome to about page</h1>")
        // res.end("<a href='/'>Go back to home</a>")
    }

    if(req.url === '/contact'){
        res.end("<h1>Contact us</h1>")
    }
    res.end("<h1>Ooops! Wrong address</h1>")
    // console.log(req)
    // res.write("<h1>Welcome to homepage</h1>")
    // res.end()
})

server.listen(5000)