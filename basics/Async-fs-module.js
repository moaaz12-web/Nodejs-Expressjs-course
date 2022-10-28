const {readFile, writeFile} = require('fs')
const util = require('util')
//! CALL BACK HELL

readFile('./content/text1.txt', 'utf8',  (err,res)=>{
    if(err){
        console.log("Reading error in file")
    }
    console.log("First success")
    console.log(res)
    const first = res;
    readFile('./content/text2.txt', 'utf8', (err,res2)=>{
        if(err){
            console.log("Error")
        }

        const second = res2;
        writeFile('./content/text4.txt', `Here is the result : ${res}, ${res2}`, (err,res3)=>{
            if (err){
                console.log("Could not write to file")
            }console.log("Successfully written")
        })
    })
})


//! After this, comes the Promises



