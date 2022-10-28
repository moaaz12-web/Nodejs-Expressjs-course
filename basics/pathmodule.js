const path = require('path')
//! The folders of content, subfolder and text.txt are built for this file's practise
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)


console.log(path.basename(filePath))


console.log(path.resolve())
console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))