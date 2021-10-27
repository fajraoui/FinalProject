const express=require('express');
const routerCharity=express.Router();
const Charity = require("../Models/charity");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth=require("../Middlewares/passport")
const{registerCheck,validator,validLogin}=require("../Middlewares/validation")
// signup
routerCharity.post("/register", registerCheck(), validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const userexist = await Charity.findOne({ email });
      if (userexist) {
        return res.status(400).send({ msg: "this email already have a count" });
      }
      
      const newCharity = new Charity(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      newCharity.password = hashedPassword;
      await newCharity.save();
  
      res.send({ msg: " user Successfully registred", charity: newCharity });
    } catch (error) {
      res.status(400).send({ msg: "you can not register" });
    }
  });
  //log in
  routerCharity.post("/login",validLogin(),validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const existUser = await Charity.findOne({ email });
      if (!existUser) {
        return res.status(400).send({ msg: "bad credential" });
      }
      const matched = await bcrypt.compare(password, existUser.password);
      if (!matched) {
        return res.status(400).send({ msg: "bad credential" });
      }
      const payload = {
        _id: existUser._id,
      };
      const token = await jwt.sign(payload, process.env.secretKey);
      const loginCharity = await Charity.findOne({ email }).select("-password");
      res.send({
        charity: loginCharity,
        token: `Bearer ${token}`,
        msg: "successfully connected",
      });
    } catch (error) {
      res.status(400).send({ msg: "not connected" });
    }
  });
  //delete user
routerCharity.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        const result=await Charity.deleteOne({_id:req.params.id})
        result.deletedCount?
        res.send({msg:"user deleted successfully :) "}):
        res.send({msg:"user already deleted :( "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot delete users :( "})
    }
});
//update user 
routerCharity.put('/update/:id',async(req,res)=>{
try {
    const userexist= await Charity.findOne({email:req.body.email})
    if (userexist) {
        return (res.status(405).send("email already exist"))
    }
    const result=await Charity.updateOne({_id:req.params.id},{$set:{...req.body}})
   const userUpdated= await Charity.findOne({_id:req.params.id})
   
    result.modifiedCount? 
    res.send({userUpdated,msg:"user updated successfully "}):
    res.send({msg:"user already updated "})
} catch (error) {
    console.log(error)
        res.status(400).send({msg:"cannot update user "})
}
});
//get all users
routerCharity.get("/allusers/:query",isAuth() ,async(req,res)=>{
  try { 
    const allCharities= await  Charity.find({city:req.params.query})
    res.send({allCharities,msg:" Successfully get"})
} catch (error) {
    console.log(error)
    res.status(400).send({msg:"cannot get users  "})
}
});
//all without filter
routerCharity.get("/allcharity",isAuth() ,async(req,res)=>{
  try { 
    const allC= await  Charity.find()
    res.send({allC,msg:" Successfully get"})
} catch (error) {
    console.log(error)
    res.status(400).send({msg:"cannot get users  "})
}
});
//current Charity
routerCharity.get('/currentCharity',isAuth(),(req,res)=>{
  res.send(req.user)
 })
module.exports=routerCharity