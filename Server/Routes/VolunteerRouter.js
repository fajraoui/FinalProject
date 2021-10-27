const express=require('express');
const routerVolunteer=express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth=require('../Middlewares/passport')
const{registerCheck,validator, validLogin}=require("../Middlewares/validation");
const Volunteer = require('../Models/Volunteer');

// signup
routerVolunteer.post("/register", registerCheck(), validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const userexist = await Volunteer.findOne({ email });
      if (userexist) {
        return res.status(400).send({ msg: "this email already have a count" });
      }
      
      const newVolunteer = new Volunteer(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      newVolunteer.password = hashedPassword;
      await newVolunteer.save();
  
      res.send({ msg: " user Successfully registred", volunteer: newVolunteer });
    } catch (error) {
      res.status(400).send({ msg: "you can not register" });
    }
  });
  //log in
  routerVolunteer.post("/login",validLogin(),validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const existUser = await Volunteer.findOne({ email });
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
      const loginUser = await Volunteer.findOne({ email }).select("-password");
      res.send({
        volunteer: loginUser,
        token: `Bearer ${token}`,
        msg: "successfully connected",
      });
    } catch (error) {
      res.status(400).send({ msg: "not connected" });
    }
  });
  //delete user
routerVolunteer.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        const result=await Volunteer.deleteOne({_id:req.params.id})
        result.deletedCount?
        res.send({msg:"user deleted successfully :) "}):
        res.send({msg:"user already deleted :( "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot delete users :( "})
    }
});
//update user 
routerVolunteer.put('/update/:id',async(req,res)=>{
try {
    const userexist= await Volunteer.findOne({email:req.body.email})
    if (userexist) {
        return (res.status(405).send("email already exist"))
    }
    const result=await Volunteer.updateOne({_id:req.params.id},{$set:{...req.body}})
   const userUpdated= await Volunteer.findOne({_id:req.params.id})
   
    result.modifiedCount? 
    res.send({userUpdated,msg:"user updated successfully "}):
    res.send({msg:"user already updated "})
} catch (error) {
    console.log(error)
        res.status(400).send({msg:"cannot update user "})
}
});
//getcurrent

routerVolunteer.get('/currentVolunteer',isAuth(),(req,res)=>{
  
 res.send(req.user)
 })
module.exports=routerVolunteer