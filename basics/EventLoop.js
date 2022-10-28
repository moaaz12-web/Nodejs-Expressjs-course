//! Node js.dev (Event loop)
//! Youtube (what the heck is event loop AND/OR official node js video channel)
//! ALL COURSE SLIDES ARE AVAIABLE ON `course-api.com`


//! Event loop allows node js to perform non blocking IO operations, despite the fact that JS is single threaded. Single threaded means JS reads everything line by line.

//! ------------------- FIRST PROGRAM - RUN IN ISOLATION THEN RUN TOGETHER FOR BETTER INTUITION---------------
console.log("Ran first")  //! 1
setTimeout(()=>{
    console.log("Ran setTimeout third")   //! 3
},0)
console.log("Ran second")   //! 2

//! ------------------- SECOND PROGRAM - RUN IN ISOLATION THEN RUN TOGETHER FOR BETTER INTUITION---------------
console.log("ran first for interval")
setInterval(()=>{
    console.log("Ran setInterval")   //! This will run every three seconds and the code below wont run
},3)
console.log("Ran third for interval")

