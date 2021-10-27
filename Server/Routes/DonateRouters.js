const express=require('express');
const routerDonate=express.Router();
const Donate = require("../Models/Donate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth=require("../Middlewares/passport")
const{registerCheck,validator,validLogin}=require("../Middlewares/validation")
// signup
routerDonate.post("/register", registerCheck(), validator, async (req, res) => {
    const { email, password,confirmPassword } = req.body;
    try {
      const userexist = await Donate.findOne({ email });
      if (userexist) {
        return res.status(400).send({ msg: "this email already have a count" });
      }
      if (password !== confirmPassword){
        return res.status(400).send({
            msg:"The password and confirmation password do not match"
        });
    }
      const newDonate = new Donate(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);
      newDonate.password = hashedPassword;
      await newDonate.save();
  
      res.send({ msg: " user Successfully registred", donate: newDonate });
    } catch (error) {
      res.status(400).send({ msg: "you can not register" });
    }
  });
  //log in
  routerDonate.post("/login",validLogin(),validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const existDonate = await Donate.findOne({ email });
      if (!existDonate) {
        return res.status(400).send({ msg: "bad credential" });
      }
      const matched = await bcrypt.compare(password, existDonate.password);
      if (!matched) {
        return res.status(400).send({ msg: "bad credential" });
      }
      const payload = {
        _id: existDonate._id,
      };
      const token = await jwt.sign(payload, process.env.secretKey);
      const loginDonate = await Donate.findOne({ email }).select("-password");
      res.send({
        donate: loginDonate,
        token: `Bearer ${token}`,
        msg: "successfully connected",
      });
    } catch (error) {
      res.status(400).send({ msg: "not connected" });
    }
  });
  //delete user
routerDonate.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        const result=await Donate.deleteOne({_id:req.params.id})
        result.deletedCount?
        res.send({msg:"user deleted successfully :) "}):
        res.send({msg:"user already deleted :( "})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot delete users :( "})
    }
});
//update user 
routerDonate.put('/update/:id',async(req,res)=>{
try {
    const userexist= await Donate.findOne({email:req.body.email})
    if (userexist) {
        return (res.status(405).send("email already exist"))
    }
    const result=await Donate.updateOne({_id:req.params.id},{$set:{...req.body}})
   const donateUpdated= await Donate.findOne({_id:req.params.id})
   
    result.modifiedCount? 
    res.send({donateUpdated,msg:"user updated successfully "}):
    res.send({msg:"user already updated "})
} catch (error) {
    console.log(error)
        res.status(400).send({msg:"cannot update user "})
}
});
//current user for dashboard
routerDonate.get('/currentDonate',isAuth(),(req,res)=>{
  res.send(req.user)
 })

module.exports=routerDonate