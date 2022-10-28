const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home Page")
    }
    if(req.url === '/about'){
        for(let i =0; i<1000; i++){
            for(let j =0; j<1000; j++){
                console.log(`${i}, ${j}`)     //! Blocking code, until this executes, we can't go to different pages
            }   
        }
        res.end("About Page")
    }
    res.end("Oops! Wrong Page")

})

server.listen(5000, ()=>{
    console.log("Server running on port 5000")
})