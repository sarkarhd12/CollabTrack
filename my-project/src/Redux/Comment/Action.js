
import api from '../../config/api';
import * as actionTypes from './ActionType';


export const createComment=(commentData)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.CREATE_COMMENT_REQUEST});
       try{
         const response = await api.post(
            `/api/comments`,
            commentData
         );
         console.log("comment created",response.data);
         dispatch({
            type:actionTypes.CREATE_COMMENT_SUCCESS,
            comment:response.data
         });
       }catch(error){
        console.log(error);
         dispatch({
            typeof:actionTypes.CREATE_COMMENT_FAILURE,
            error:error.message
         })
       }

}
}

export const deleteComment=(commentId)=>{
   return async(dispatch)=>{
       dispatch({type:actionTypes.DELETE_COMMENT_FAILURE});
      try{
        const response = await api.delete(
           `/api/comments/${commentId}`
        );
        console.log("fetch messages",response.data);
        dispatch({
           type:actionTypes.DELETE_COMMENT_SUCCESS,commentId
        });
      }catch(error){
       console.log(error);
        dispatch({
           typeof:actionTypes.DELETE_COMMENT_FAILURE,
           error:error.message
        })
      }

}
}

export const fetchComment=(issueId)=>{
   console.log(issueId);
   return async(dispatch)=>{
       dispatch({type:actionTypes.FETCH_COMMENT_REQUEST});
      try{
        const response = await api.get(
           `/api/comments/${issueId}`
        );
        console.log(response.data)
        dispatch({
           type:actionTypes.FETCH_COMMENT_SUCCESS,
           comments:response.data
        });
      }catch(error){
       console.log(error);
        dispatch({
           typeof:actionTypes.FETCH_COMMENT_FAILURE,
           error:error.message
        })
      }

}
}