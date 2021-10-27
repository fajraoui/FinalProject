import axios from 'axios'
import{GET_POSTS_SUCCESS,GET_POSTS_FAIL,LOADING_POSTS,
    DELETE_POST, EDIT_POST,  GET_MYPOSTS_SUCCESS, GET_MYPOSTS_FAIL, GET_MYPOSTS_LOADING, GETONE_POST, LOADING_ALLPOSTS, GET_ALLPOSTS_SUCCESS, GET_ALLPOSTS_FAIL} from '../constants/actionTypesPost'
 export const getPosts=(query)=>async dispatch=>{
    dispatch({type:LOADING_POSTS})
    try {
      const opts={
        headers:{
            Authorization:localStorage.getItem('token')
        }}
        const response=await axios.get(`/posts/allposts/${query}`,opts );
        dispatch({type:GET_POSTS_SUCCESS,payload:response.data.filteredPost})
    } catch (error) {
        console.dir(error)
        dispatch({type:GET_POSTS_FAIL,payload:error})
    }
}
export const getAllPosts=()=>async dispatch=>{
  dispatch({type:LOADING_ALLPOSTS})
  try {
    const opts={
      headers:{
          Authorization:localStorage.getItem('token')
      }}
      const response=await axios.get("/posts/all",opts );
      dispatch({type:GET_ALLPOSTS_SUCCESS,payload:response.data.allp})
  } catch (error) {
      console.dir(error)
      dispatch({type:GET_ALLPOSTS_FAIL,payload:error})
  }
}
export const getMyPosts=()=>async dispatch=>{
  dispatch({type:GET_MYPOSTS_LOADING})
  try {
    const opts={
      headers:{
          Authorization:localStorage.getItem('token')
      }
  }
      const response=await axios.get("/posts/myposts",opts );
      dispatch({type:GET_MYPOSTS_SUCCESS,payload:response.data.MyPosts})
  } catch (error) {
      console.dir(error)
      dispatch({type:GET_MYPOSTS_FAIL,payload:error})
  }
}
export const  addPost=(newPost,history)=>async dispatch=>{
    try {
      const opts={
        headers:{
            Authorization:localStorage.getItem('token')
        }}
        const response=await axios.post("/posts/add",newPost,opts);
        history.push("/dashboard")
        dispatch(getMyPosts())
        console.log(response.data)
    } catch (error) {
        console.dir(error)
    }
    }

    export const deletePost = (_id) => async (dispatch) => {
        try {
          const opts={
            headers:{
                Authorization:localStorage.getItem('token')
            }}
          const response = await axios.delete(`/posts/delete/${_id}`,opts);
          dispatch({ type: DELETE_POST ,payload:response.data});
          dispatch(getMyPosts());
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
      export const editPost = (post,id) => async (dispatch) => {
        try {
          const opts={
            headers:{
                Authorization:localStorage.getItem('token')
            }}
          const response = await axios.put(`/posts/update/${id}`,post,opts);
          dispatch({ type: EDIT_POST });
          dispatch(getMyPosts());
          console.log(response.data)
        } catch (error) {
          console.dir(error);
        }
      };
      export const getOnePost=(id)=>async(dispatch)=>{
        try {
          const opts={
            headers:{
                Authorization:localStorage.getItem('token')
            }}
          const response=await axios.get(`/posts/onepost/${id}`,opts);
          dispatch({type:GETONE_POST,payload:response.data.Apost});

          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      }

