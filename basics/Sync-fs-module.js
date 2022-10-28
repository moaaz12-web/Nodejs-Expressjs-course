const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/text1.txt', 'utf8')

const second = readFileSync('./content/text2.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync('./content/text3.txt', "Here is the result", {flag:'a'}) //runs multiple times and write the same line over and over
writeFileSync('./content/text3.txt', "Here is the result")  //runs once and writes only once


// const fs = require('fs')
// fs.readFileSync()


//! After this, comes the async-fs-module










