import{GET_POSTS_SUCCESS,GET_POSTS_FAIL,LOADING_POSTS, GET_MYPOSTS_FAIL, GET_MYPOSTS_SUCCESS, GET_MYPOSTS_LOADING, GETONE_POST, LOADING_ALLPOSTS, GET_ALLPOSTS_SUCCESS, GET_ALLPOSTS_FAIL} from '../constants/actionTypesPost'
const initialState = {
    loading:false,
    errors:null,
    posts:[],
    myPosts:[],
    OnePost:{}
  };
  export const PostReducer=(state=initialState,{type,payload})=>{
      switch (type) {
          case LOADING_POSTS:
              return{
                  ...state,loading:true
              }
              case GET_POSTS_SUCCESS:
                return{
                    ...state,loading:false,posts:payload
                }
                case GET_POSTS_FAIL:
                return{
                    ...state,loading:false,errors:payload
                }
                case GET_MYPOSTS_LOADING:
                    return{
                        ...state,loading:true
                    }
                case GET_MYPOSTS_FAIL:
                    return{
                        ...state,loading:false,errors:payload
                    }
                    case GET_MYPOSTS_SUCCESS:
                        return{
                            ...state,loading:false,myPosts:payload
                        }
             case GETONE_POST:
                return{
                    ...state,OnePost:payload
                }   
                case LOADING_ALLPOSTS:
                    return{
                        ...state,loading:true
                    }
                    case GET_ALLPOSTS_SUCCESS:
                      return{
                          ...state,loading:false,posts:payload
                      }
                      case GET_ALLPOSTS_FAIL:
                      return{
                          ...state,loading:false,errors:payload
                      }   
      
          default:
            return  state
      }
  }