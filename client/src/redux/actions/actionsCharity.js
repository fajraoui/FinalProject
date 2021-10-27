import {
    LOADING_CHARITY,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  CURRENT_CHARITY,
  CURRENT_FAIL,LOGOUT_CHARITY, LOADING_ALL,
  ALL_CHARITY_SUCCESS,ALL_CHARITY_FAIL, LOADING_ALLCHARITIES, ALL_CHARITIES_SUCCESS, ALL_CHARITIES_FAIL

  } from "../constants/actionTypesCH";
  import axios from "axios";
  export const registerCharity = (newCharity,history) => async (dispatch) => {
    dispatch({ type: LOADING_CHARITY });
    try {
      const response = await axios.post("/charity/register", newCharity);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      history.push("/signIn")
    } catch (error) {
      console.dir(error);
      dispatch({ type: SIGNUP_FAIL, payload: error });
    }
  };
  
  export const loginCharity = (infoCharity,history) => async (dispatch) => {
    dispatch({ type: LOADING_CHARITY });
    try {
      const response = await axios.post("/charity/login", infoCharity);
      dispatch({ type: LOGGIN_SUCCESS, payload: response.data });
  history.push("/profile")
    } catch (error) {
      console.dir(error);
      dispatch({ type: LOGGIN_FAIL, payload: error });
    }
  };
  
  export const currentCharity=()=>async dispatch=>{
      dispatch({ type: LOADING_CHARITY });
      try {
          const opts={
              headers:{
                  Authorization:localStorage.getItem('token')
              }
          }
          const response=await axios.get("/charity/currentCharity",opts)
          dispatch({type:CURRENT_CHARITY,payload:response.data})
      } catch (error) {
          console.dir(error)
          dispatch({type:CURRENT_FAIL,payload:error})
      }
  }
  export const getAllCharity=(query)=>async(dispatch)=>{
    dispatch({ type: LOADING_ALL });
    try {
      const opts={
        headers:{
            Authorization:localStorage.getItem('token')
        }}
      const response = await axios.get( `/charity/allusers/${query}` ,opts);
      dispatch({ type: ALL_CHARITY_SUCCESS, payload: response.data.allCharities });
      
    } catch (error) {
      console.dir(error);
      dispatch({ type: ALL_CHARITY_FAIL, payload: error });
    }
  };

  export const getAllCharities=()=>async(dispatch)=>{
    dispatch({ type: LOADING_ALLCHARITIES });
    try {
      const opts={
        headers:{
            Authorization:localStorage.getItem('token')
        }}
      const response = await axios.get( "/charity/allcharity" ,opts);
      dispatch({ type: ALL_CHARITIES_SUCCESS, payload: response.data.allC });
      
    } catch (error) {
      console.dir(error);
      dispatch({ type: ALL_CHARITIES_FAIL, payload: error });
    }
  };
  
  
  export const logout=()=>dispatch=>{
      dispatch({type:LOGOUT_CHARITY})
  }