const express=  require('express')
const app = express()

let {people} = require('./data.js')

app.use(express.static('./methods-public'))


app.use(express.urlencoded({ extended: false }))    //through this, we get the data we typed in the form when submitting

app.use(express.json())


app.post('/login', (req,res)=>{
    console.log(req.body.name)
    if(req.body.name){
        return res.status(200).send(`<h1> Welcome ${req.body.name}!</h1>`)
    }
    res.status(404).send("<h1>Please enter a name</h1>")
})

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req,res)=>{
    const {name }= req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"please enter a name"})
    }
    res.status(201).send({success:true, person:name})
})


app.post('/api/people/example', (req,res)=>{
    const {name }= req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"please enter a name"})
    }
    res.status(201).send({success:true, person:[...people,name]})
})






app.put('/api/people:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person=>person.id === Number(id)))
    if(!person){
        return res.status(404).json({success:false, msg: "No person with the given id"})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
})



app.delete('/api/people:id',(req,res)=>{
    const person = people.find((person)=>person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false, msg:"Please enter an id to delete the person"})
    }
    const newPeople = people.filter((person)=> person.id === Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
})


function abc(){
    console.log("server running on port 5002")
}
app.listen(5005, abc())


//! Now let's do some cleaning with router.
//! Take all of the routes for apis from this file and transfer to auth.js. Make it a named export



