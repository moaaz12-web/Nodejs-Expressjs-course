const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try{
        const first = await readFilePromise('./content/text1.txt', 'utf8');
        const second = await readFilePromise('./content/text2.txt', 'utf8');
        await writeFilePromise('./content/text6.txt', 'THIS IS FILE 6 FROM ASYNC-AWAIT-UTILS JS FILE: ');
        console.log(first)
        console.log(second)
    }
    catch (error) {
        console.log("Some error ocurred")
    }
}
start()

//! Next file is events.js, inside event-driven-programming