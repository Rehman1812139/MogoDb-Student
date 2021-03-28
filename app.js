const express=require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const student=require('./route/student.route')
const app=express()
mongoose.connect("mongodb://localhost/studentsDb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Successfully connected to the Students Database')

})
.catch(err=>{
    console.log('Unsuccessful to connect with database')
    process.exit
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/students',student)
app.listen(3000,()=>{
    console.log('Server is running')
})