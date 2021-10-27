const mongoose=require('mongoose')
const DonateSchema=new mongoose.Schema({
    FullName:{type:String,trim:true},
    companyActivité:{type:String,required:true,trim:true},
    companyName:{type:String,required:true,trim:true},
    phone:{type:String},
    password:{type:String,required:true,trim:true},
    role:{type:String,default:'Donate'},
    email:{type:String},
    website:{type:String},
    city:{type:String,required:true},
    street:{type:String,required:true},
    postalCode:{type:Number},

    Posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
         }
    ]
})
module.exports=Donate=mongoose.model('Donate',DonateSchema)