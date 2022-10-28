//! Used to read or write data sequentially...BIG DATA...i mean large. There  are four type of streams:

//! ---------- Writable - Write data sequentially
//! ----------- Readable - Read data sequentially
//! ------------ Duplex - Read and write
//! ------------ Transform - Data can be modified when reading or writing

//! Stream extends events emitter class, so we can play with events here as well!

// const {writeFileSync} = require('fs')
// for(let i=0; i<10000; i++){
//     writeFileSync('./content/text10.txt', `Hello, this is ${i}`, {flag:'a'})
// }


//! Now this file `text10.txt` is big to simply read it via readFileSync, it might work but will be too slow. So for this we use streams, specifically createReadStream. This way we read data in chunks!


const {createReadStream} = require('fs')

const stream = createReadStream('../content/text10.txt', 'utf8');

stream.on("data", (result, err)=>{
    console.log(result)
})

stream.on("error", (result)=>{
    console.log("An error occured")
})

//! close, open, ready, data are all events!

//! This way we read data in chunks!


//! After this comes the COPIED CODE CUS IM  TIRED! server-with-streams.js


