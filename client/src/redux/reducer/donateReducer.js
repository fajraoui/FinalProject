import {
    LOADING_DONATE,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    CURRENT_DONATE,CURRENT_FAIL,
    LOGOUT_DONATE
  } from "../constants/actionTypes";
  
  const initialState = {
    loading: false,
    errors:null,
    donate:{}
  };
  
  export const DonateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_DONATE:
        return { ...state, loading: true };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false,errors:null };
        case LOGGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return { ...state, loading: false, donate: payload.donate,errors:null };
      case LOGGIN_FAIL:
        return { ...state,errors:payload, loading: false };
        case SIGNUP_FAIL:
          return { ...state,errors:payload, loading: false };
          case CURRENT_DONATE:
        return { ...state,donate:payload, loading: false,errors:null };
      case CURRENT_FAIL:
        return { ...state,errors:payload, loading: false };
        case LOGOUT_DONATE:
          localStorage.removeItem('token')
          return { donate:{},errors:null, loading: false };
      default:
        return state;
    }
  };