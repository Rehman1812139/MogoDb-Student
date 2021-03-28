const mongoose=require('mongoose')
const Schema=mongoose.Schema

let StudentSchema=new Schema({
     Name:{type:String, required:true,max:100},
     Gender:{type:String,required:true,max:1},
     City:{type:String, required:true,max:100},
})

module.exports=mongoose.model('Student',StudentSchema)