import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS } from "./ActionType"

const initialState={
    user:null,
    loading:false,
    error:null,
    jwt:null,
    projectSize:0
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
      case REGISTER_FAILURE:
      case LOGIN_REQUEST:
      case GET_USER_REQUEST:


      return {...state,loading:true,error:null};

      case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:

        const {jwt}=action.payload
           
      return {...state,loading:false,
        error:null,
        jwt:jwt
      }
       // jwt:action.payload.jwt};
        
      case GET_USER_SUCCESS:
       
      return {...state,loading:false,error:null,user:action.payload};
      
      case LOGOUT:
        return initialState;

      default:
       return state;

}
}

