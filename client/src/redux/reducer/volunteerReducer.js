import {
    LOADING_VOLUNTEER,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  CURRENT_VOLUNTEER,
  CURRENT_FAIL,LOGOUT_VOLUNTEER
  } from "../constants/actionTypesV";
  const initialState = {
    loading: false,
    errors:null,
    volunteer:{}
  };
  
  export const VolunteerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_VOLUNTEER:
        return { ...state, loading: true };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false,errors:null };
        case LOGGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return { ...state, loading: false, volunteer: payload.volunteer,errors:null };
      case LOGGIN_FAIL:
        return { ...state,errors:payload, loading: false };
        case SIGNUP_FAIL:
          return { ...state,errors:payload, loading: false };
          case CURRENT_VOLUNTEER:
        return { ...state,volunteer:payload, loading: false,errors:null };
      case CURRENT_FAIL:
        return { ...state,errors:payload, loading: false };
        case LOGOUT_VOLUNTEER:
          localStorage.removeItem('token')
          return { volunteer:{},errors:null, loading: false };
      default:
        return state;
    }
  };