import {
    LOADING_CHARITY,
    LOGGIN_SUCCESS,
    LOGGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    CURRENT_CHARITY,CURRENT_FAIL,
    LOGOUT_CHARITY,
    LOADING_ALL,
    ALL_CHARITY_SUCCESS,
    ALL_CHARITY_FAIL,
    LOADING_ALLCHARITIES,
    ALL_CHARITIES_FAIL,
    ALL_CHARITIES_SUCCESS
  } from "../constants/actionTypesCH";
  
  const initialState = {
    loading: false,
    errors:null,
    charity:{},
    allCharity:[]
  };
  
  export const CharityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_CHARITY:
        return { ...state, loading: true };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false,errors:null };
        case LOGGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return { ...state, loading: false, charity: payload.charity,errors:null };
      case LOGGIN_FAIL:
        return { ...state,errors:payload, loading: false };
        case SIGNUP_FAIL:
          return { ...state,errors:payload, loading: false };
          case CURRENT_CHARITY:
        return { ...state,charity:payload, loading: false,errors:null };
      case CURRENT_FAIL:
        return { ...state,errors:payload, loading: false };
        case LOGOUT_CHARITY:
          localStorage.removeItem('token')
          return { charity:{},errors:null, loading: false };
          case LOADING_ALL:
            return { ...state, loading: true };
          case ALL_CHARITY_FAIL:
            return { ...state, loading: false,errors:payload };
            case ALL_CHARITY_SUCCESS:
              return { ...state, loading: false,errors:null,allCharity:payload };
              case LOADING_ALLCHARITIES:
                return { ...state, loading: true };
              case ALL_CHARITIES_FAIL:
                return { ...state, loading: false,errors:payload };
                case ALL_CHARITIES_SUCCESS:
                  return { ...state, loading: false,errors:null,allCharity:payload };
      default:
        return state;
    }
  };