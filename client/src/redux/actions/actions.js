import {
    LOADING_DONATE,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  CURRENT_DONATE,
  CURRENT_FAIL,LOGOUT_DONATE
  } from "../constants/actionTypes";
  import axios from "axios";
  
  export const registerDonate = (newDonate,history) => async (dispatch) => {
    dispatch({ type: LOADING_DONATE });
    try {
      const response = await axios.post("/donate/register", newDonate);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      history.push("/login")
    } catch (error) {
      console.dir(error);
      dispatch({ type: SIGNUP_FAIL, payload: error });
    }
  };
  
  export const loginDonate = (infoDonate,history) => async (dispatch) => {
    dispatch({ type: LOADING_DONATE });
    try {
      const response = await axios.post("/donate/login", infoDonate);
      dispatch({ type: LOGGIN_SUCCESS, payload: response.data });
  history.push("/dashboard")
    } catch (error) {
      console.dir(error);
      dispatch({ type: LOGGIN_FAIL, payload: error });
    }
  };
  
  export const currentDonate=()=>async dispatch=>{
      dispatch({ type: LOADING_DONATE });
      try {
          const opts={
              headers:{
                  Authorization:localStorage.getItem('token')
              }
          }
          const response=await axios.get("/donate/currentDonate",opts)
          dispatch({type:CURRENT_DONATE,payload:response.data})
      } catch (error) {
          console.dir(error)
          dispatch({type:CURRENT_FAIL,payload:error})
      }
  }
  
  export const logout=()=>dispatch=>{
      dispatch({type:LOGOUT_DONATE})
  }