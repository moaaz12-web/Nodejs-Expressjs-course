const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("<h1>Welcome to home page</h1>")
// })


const server = http.createServer()
server.on('request', (req,res)=>{
    res.end("<h1>Welcome</h1>")
})

server.listen(5001)


//! Next file is streams.js inside stream folder