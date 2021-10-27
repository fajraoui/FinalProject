const express=require('express')
const routerPosts=express.Router()
const Post=require('../Models/Post')
const isAuth=require('../Middlewares/passport')
//add a post
routerPosts.post("/add",isAuth(),async(req,res)=>{
   try {

        const newPost=new Post({...req.body,Author:req.user._id })
        await newPost.save()
        res.send({newPost,msg:'your post is added successfully'})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot add post "})   
    }
})

//get all posts
routerPosts.get('/allposts/:query',isAuth(),async(req,res)=>{
    try {
        const posts=await Post.find().populate('Author').exec()
        const filteredPost=posts.filter(el=>el.Author.city==req.params.query)
        res.send({filteredPost,msg:"all posts shared successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot get posts "})
    }
})
//delete post
routerPosts.delete('/delete/:id',isAuth(),async(req,res)=>{
    console.log(req.params.id)
    try {
       const result=await Post.deleteOne({_id:req.params.id})
       result.deletedCount?
        res.send({msg:"post deleted successfully"}):
        res.send({msg:"post already deleted"})
     } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot delete post "})
    }
})
//update post
routerPosts.put('/update/:id',isAuth(),async(req,res)=>{
    try {
        const result=await Post.updateOne({_id:req.params.id},{$set:{...req.body}})
   const postUpdated= await Post.findOne({_id:req.params.id})
   
    result.modifiedCount? 
    res.send({postUpdated,msg:"post updated successfully "}):
    res.send({msg:"the post is already updated "})
    } catch (error) {
        console.dir(error)
        res.status(400).send({msg:"cannot update post "})
    }
})
//getOne Post for update 
routerPosts.get('/onepost/:id',isAuth(),async(req,res)=>{
    try {
        const Apost=await Post.findById({_id:req.params.id})
     res.send({Apost,msg:"the Post"})
    } catch (error) {
        console.dir(error)
        res.status(400).send({msg:"cannot find the post"})
    }
})
//getMyPosts
routerPosts.get('/myposts',isAuth(),async(req,res)=>{
    try {
        const MyPosts=await Post.find({id:req.user._id})
        
        res.send({MyPosts,msg:"your posts"})
    } catch (error) {
        console.dir(error)
        res.status(400).send({msg:"cannot get posts"})
    }
})
routerPosts.get('/all/',isAuth(),async(req,res)=>{
    try {
        const allp=await Post.find().populate('Author').exec()
        res.send({allp,msg:"all posts shared successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"cannot get posts "})
    }
})
module.exports=routerPosts