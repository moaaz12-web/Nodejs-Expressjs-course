const {readFile} = require('fs')

readFile('./content/text1.txt', uft9, (err, res)=>{
    if (err){
        console.log("Could not read file")
    }console.log(res)
})


//! Ok, so if we want to read to files or more, we end up going into call back. Solution is PROMISES
//! ----------------------------PROMISES-------------------------

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err,res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}


// getText('./conTent/text1.txt').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

//! MORE COMPACT WAY OF WRITING ABOVE COMMENTED CODE
getText('./content/text1.txt').then(result => console.log(result)).catch(error=> consoles.log(error))


//! After this, comes the Async-Await.js
