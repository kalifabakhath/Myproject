import * as ACTIONTYPES from '../actiontypes'
import axios from 'axios';
import {url} from '../baseurl'

export const loaduser = () => (dispatch,getState) => {

   dispatch({type:ACTIONTYPES.USER_LOADING});
   axios(`${url}/login/user`,tokenConfig(getState))
     .then(res => {
        dispatch({type:ACTIONTYPES.CLEAR_ERRORS})
        dispatch({
           type:ACTIONTYPES.USER_LOADED,
           payload:res.data
        })
     })
     .catch(err => {
        dispatch(getErrors(err.response.data,err.response.status,'AUTH_FAIL'));
        dispatch({type:ACTIONTYPES.AUTH_ERROR});
     })
}

// register user 
export function signup({username,email,password,confirmpassword}) { 
   
   return async (dispatch) =>{

      const config = {
         headers:{"Content-Type":"application/json"}
      }
      const body = JSON.stringify({username,email,password,confirmpassword});
         await axios.post(
            `${url}/signup`,body,config)
         .then(res =>{
            dispatch({
                  type:ACTIONTYPES.SIGN_UP_SUCCESS,
                  payload:res.data
               })
               dispatch({
                  type:ACTIONTYPES.CLEAR_ERRORS
               });
            })
            .catch(err=> {
            
               dispatch(getErrors(err.response.data,err.response.status,'SIGN_UP_FAIL'));
               dispatch({
               type:ACTIONTYPES.SIGN_UP_FAIL
            })
            
         })
    }
}

// Login User
export function login({email,password}) { 
   return (dispatch) =>{
      const config = {
         headers:{"Content-Type":"application/json"}
      }
      const body = JSON.stringify({email,password});
         axios.post(`${url}/login`,body,config)
           .then(res =>{
            dispatch({
                  type:ACTIONTYPES.LOGIN_SUCCESS,
                  payload:res.data
               })
            })
            .catch(err=> {
               dispatch(getErrors(err.response.data,err.response.status,'LOGIN_FAIL'));
               console.log(err);
               dispatch({
               type:ACTIONTYPES.LOGIN_FAIL
            })
            
         })
    }
}

// Logout User
export function logout(){
   return {
      type:ACTIONTYPES.LOGOUT_SUCCESS
   }
}

// Error actions
 export const getErrors=(msg,status,id=null) =>{
   return{
      type:ACTIONTYPES.GET_ERRORS,
      payload:{msg,status,id}
   }
}


// set up config

export const tokenConfig = getState => {

   const token = getState().auth.token;

   const config = {
      headers:{
         "Content-type":"application/json"
      }
   }
   if(token){
      config.headers['x-auth-token']=token; 
   }
}