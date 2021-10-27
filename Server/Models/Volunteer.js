const mongoose=require('mongoose')
const VolunteerSchema=new mongoose.Schema({
    FullName:{type:String,trim:true},
    phone:{type:String},
    password:{type:String},
    role:{type:String,default:'Volunteer'},
    email:{type:String},
    city:{type:String,required:true},
    street:{type:String,required:true},
    postalCode:{type:Number},

})
module.exports=Volunteer=mongoose.model('volunteer',VolunteerSchema)