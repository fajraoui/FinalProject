const mongoose=require('mongoose')
const CharitySchema=new mongoose.Schema({
    FullName:{type:String,trim:true},
    companyActivité:{type:String,required:true,trim:true},
    companyName:{type:String,required:true,trim:true},
    phone:{type:String},
    password:{type:String},
    role:{type:String,default:'Receiver'},
    condition:{type:String,enum:['Broke','Satisfied'],default:'Broke'},
    email:{type:String},
    website:{type:String},
    city:{type:String,required:true},
    street:{type:String,required:true},
    postalCode:{type:Number},
})
module.exports=Charity=mongoose.model('charity',CharitySchema)