//! Promises were good, but still dirty and difficult to read. Async await are the best.

const {readFile, writeFile} = require('fs')
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


const start = async()=>{
    try{
        const first = await getText('./content/text1.txt', 'utf8');
        const second = await getText('./content/text2.txt', 'utf8');
        console.log(first)
        console.log(second)
    }
    catch (error) {
        console.log("Some error ocurred")
    }
}
start()



const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

