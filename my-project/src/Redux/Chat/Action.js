import api from "../../config/api";
import * as actionTypes from "./ActionType";


export const sendMessage=(messageData)=>{
   console.log(messageData)
   
   return async(dispatch)=>{
        dispatch({type:actionTypes.SEND_MESSAGE_REQUEST});
       try{
         const response = await api.post(
            "/api/message/send",
            messageData
         );
         dispatch({
            type:actionTypes.SEND_MESSAGE_SUCCESS,
            message:response.data
         });
         console.log("message sent",response.data)
       }catch(error){
        console.log(error);
         dispatch({
            typeof:actionTypes.SEND_MESSAGE_FAILURE,
            error:error.message
         })
       }

}
}

export const fetchChatByProject=(projectId)=>{
  console.log(projectId)
    return async(dispatch)=>{
        dispatch({type:actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST});
       try{
         const response = await api.get(
            `/api/projects/${projectId}/chat`
         );
         dispatch({
            type:actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
            chat:response.data
         });
         console.log("fetch chat",response.data);

       }catch(error){
        console.log(error);
         dispatch({
            typeof:actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
            error:error.message
         })
       }

}
}

export const fetchChatMessages=(chatId)=>{
   console.log(chatId)
    return async(dispatch)=>{
        dispatch({type:actionTypes.FETCH_CHAT_MESSAGE_REQUEST});
       try{
         const response = await api.get(
            `/api/message/chat/${chatId}`
         );
         dispatch({
            type:actionTypes.FETCH_CHAT_MESSAGE_SUCCESS,
            chatId,
            messages:response.data
         });
         console.log("fetch messages",response.data);

       }catch(error){
        console.log(error);
         dispatch({
            typeof:actionTypes.FETCH_CHAT_MESSAGE_FAILURE,
            error:error.message
         })
       }

}
}