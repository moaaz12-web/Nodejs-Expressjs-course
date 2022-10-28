let {people} = require('../data')

const getPeople=(req,res)=>{
    res.status(200).json({success:true, data:people})
}

const createPeople =  (req,res)=>{
    const {name }= req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"please enter a name"})
    }
    res.status(201).send({success:true, person:name})
}

const createPeople_EXAMPLE = (req,res)=>{
    const {name }= req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"please enter a name"})
    }
    res.status(201).send({success:true, person:[...people,name]})
}


const updatePeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.params
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
}

const deletePeople = (req,res)=>{
    const person = people.find((person)=>person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false, msg:"Please enter an id to delete the person"})
    }
    const newPeople = people.filter((person)=> person.id === Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {getPeople, createPeople, createPeople_EXAMPLE, updatePeople, deletePeople}
