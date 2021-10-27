import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import  {addPost}  from '../redux/actions/actionsPosts';

import FileBase64 from 'react-file-base64';
const Addpost = () => {
  const [newPost, setnewPost] = useState({title:"",quantity:"",description:"",image:""})
  const dispatch = useDispatch()
 const history=useHistory()
    const handleChange=(e)=>{
        
        setnewPost({...newPost,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addPost(newPost,history))
  
    }
    return (
        <div className="addp">
             <img src="/images/1.png" alt=""/>
           <div>
           <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">

          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Quantity"
            placeholder="Quantity"
            name="quantity"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field
          id="form-input-control-error-email"
          control={TextArea}
          label="Description"
          placeholder="description"
         
          name="description"
          onChange={handleChange}
        />
         <FileBase64
        multiple={ false}
        onDone={({base64})=>setnewPost({...newPost,image:base64}) } />
        
        <Form.Field
          id="form-button-control-public"
          color="violet"
          control={Button}
          content="ADD"
        />
      
      </Form>
     
           </div>
        </div>
    )
}

export default Addpost
