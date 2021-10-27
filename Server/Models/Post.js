const mongoose=require('mongoose')
const PostSchema=new mongoose.Schema({
    img:{type:String},
    description:{type:String,required:true},
    title:{type:String,required:true},
    quantity:{type:Number},
    Author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donate'
    }
},
{timestamps: true
})
module.exports=Post=mongoose.model('Post',PostSchema)