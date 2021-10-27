const mongoose=require('mongoose');
require('dotenv').config({ path: './.env' });
const CONNECTDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected successfully')
    } catch (error) {
        console.log('DB not connected'+error)
    }
}
module.exports=CONNECTDB