
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getOnePost } from "../redux/actions/actionsPosts";
import { Button, Form } from 'semantic-ui-react'
import { useHistory } from "react-router";



const Edit = ({match}) => {
  const dispatch = useDispatch();
  const Postd = useSelector(state => state.PostReducer.OnePost)
  const history=useHistory();
  useEffect(() => {
    dispatch(getOnePost(match&&match.params.id))
  }, [match&&match.params.id])
  useEffect(() => {
    setpost({...Postd})
  }, [Postd])
      const [post, setpost] = useState({title:"",quantity:"",description:""})
      const handleChange=(e)=>{
        e.preventDefault();
        setpost({...post,[e.target.name]:e.target.value});
       }
       const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editPost(post,Postd._id))
        setpost({title:"",quantity:"",description:""})
              history.push("/dashboard") };
      return (
    <div className="edit">
      <Form onSubmit={handleSubmit}>
    <Form.Group  className="editInput" unstackable widths={2}>
      <Form.Input label='title' placeholder='title' name="title" value={post.title} onChange={handleChange}/>
      <Form.Input label='quantity' placeholder='quantity' name="quantity" value={post.quantity} onChange={handleChange}/>
    
      <Form.Input id="wid"  label='description' placeholder='description' name="description" value={post.description} onChange={handleChange}/>
      </Form.Group>
    <Button type='submit'>EDIT</Button>
  </Form> 
        </div>
    
  );
};

export default Edit;

