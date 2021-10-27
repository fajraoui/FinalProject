
import {
    LOADING_VOLUNTEER,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  CURRENT_VOLUNTEER,
  CURRENT_FAIL,LOGOUT_VOLUNTEER
  } from "../constants/actionTypesV";
  import axios from "axios";
  export const registerVolunteer = (newVolunteer,history) => async (dispatch) => {
    dispatch({ type: LOADING_VOLUNTEER });
    try {
      const response = await axios.post("/volunteer/register", newVolunteer);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      history.push("/vlogin")
    } catch (error) {
      console.dir(error);
      dispatch({ type: SIGNUP_FAIL, payload: error });
    }
  };
  
  export const loginVolunteer = (infoVolunteer,history) => async (dispatch) => {
    dispatch({ type: LOADING_VOLUNTEER });
    try {
      const response = await axios.post("/volunteer/login", infoVolunteer);
      dispatch({ type: LOGGIN_SUCCESS, payload: response.data });
      console.log(response.data)
  history.push("/vprofile")
    } catch (error) {
      console.dir(error);
      dispatch({ type: LOGGIN_FAIL, payload: error });
    }
  };
  
  export const currentVolunteer=()=>async dispatch=>{
      dispatch({ type: LOADING_VOLUNTEER });
      try {
          const opts={
              headers:{
                  Authorization:localStorage.getItem('token')
              }
          }
          const response=await axios.get("/volunteer/currentVolunteer",opts)
          dispatch({type:CURRENT_VOLUNTEER,payload:response.data})
      } catch (error) {
          console.dir(error)
          dispatch({type:CURRENT_FAIL,payload:error})
      }
  }
  
  export const logout=()=>dispatch=>{
      dispatch({type:LOGOUT_VOLUNTEER})
  }