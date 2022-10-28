//! Here, we created a server purely using node and added some frontend code to see how hard it is to work without express!

const http = require('http')


const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./frontend/index.html')
const homecss = readFileSync('./frontend/style.css')
const homejs = readFileSync('./frontend/ggg.js')


const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url)

    if(url === '/'){
        res.write(homePage)
        res.end()
    }
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homecss)
        res.end()
    }
    else if (url === '/ggg.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homejs)
        res.end()
    }

})

server.listen(5001)






//! Next folder is express-tut