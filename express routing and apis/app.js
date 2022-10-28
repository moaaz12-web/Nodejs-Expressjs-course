const express=  require('express')
const app = express()

const people_router = require('./routes/people')
const login_router = require('./routes/auth')
app.use(express.static('./methods-public'))


app.use(express.urlencoded({ extended: false }))    //through this, we get the data we typed in the form when submitting

app.use(express.json())

app.use('/api/people', people_router)
app.use('/login', login_router)


function abc(){
    console.log("server running on port 5002")
}
app.listen(5005, abc())




