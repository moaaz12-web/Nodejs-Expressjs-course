//! Event driven programming is heavily used in Node js. Core building blocks of node. You won't be creating them yourselves  but they're important to know.

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//! on listens for an event
customEmitter.on('name of event', (name,age)=>{
    console.log(`Name is ${name} and age is ${age}.`)
})



customEmitter.on('name of event', ()=>{
    console.log("More logic")
})

//! emit emits the event
customEmitter.emit('name of event', "Moaaz","20","Male")

//! For the same event, we can have many methods.


//! Next file is server-using-events.js