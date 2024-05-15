import api from "../../config/api";

import * as types from './ActionType';

export const getUserSubscription=()=>{
    return async(dispatch)=>{
        dispatch({type:types.GET_USER_SUBSCRIPTION_REQUEST});
       try{
         const response = await api.get(
            `/api/subscription/user`,
            {
               headers:{
                  "Authorization":`Bearer ${localStorage.getItem("jwt")}`     
                    }
            }
         );

         console.log(response.data)
         dispatch({
            type:types.GET_USER_SUBSCRIPTION_SUCCESS,
            payload:response.data
         });
       }catch(error){
        console.log(error);
         dispatch({
            type:types.GET_USER_SUBSCRIPTION_FAILURE,
            error:error.message
         })
       }
 
 }
 }

 export const upgradeUserSubscription=({planType})=>{
    return async(dispatch)=>{
        dispatch({type:types.UPGRADEUSER_SUBSCRIPTION_REQUEST});
       try{
         const response = await api.patch(
            `/api/subscription/upgrade`,null,{
               headers:{
             "Authorization":`Bearer ${localStorage.getItem("jwt")}`     
               }
            ,
                params:{
                   planType:planType,
                }
            }
         );

         console.log(response.data)
         dispatch({
            type:types.UPGRADEUSER_SUBSCRIPTION_SUCCESS,
            payload:response.data
         });
       }catch(error){
        console.log(error);
         dispatch({
            type:types.UPGRADEUSER_SUBSCRIPTION_FAILURE,
            error:error.message
         })
       }
 
 }
 }