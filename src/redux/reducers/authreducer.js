import {USER_LOADED,USER_LOADING,LOGIN_FAIL,LOGIN_SUCCESS,SIGN_UP_FAIL,
    LOGOUT_SUCCESS,
    SIGN_UP_SUCCESS,
    AUTH_ERROR
} from '../actiontypes'
const intialstate ={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
}
export const auth = (state= intialstate,actions) =>{
    switch(actions.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true,
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:actions.payload
            }
        case LOGIN_SUCCESS:
        case SIGN_UP_SUCCESS:
            localStorage.setItem('token',actions.payload.token); 
            return {
                ...state,
                ...actions.payload,
                isAuthenticated:true,
                isLoading:false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case SIGN_UP_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                isLoading:false,
                token:null,
                user:null,
                isAuthenticated:false
            }
        default:
            return state;
    }
};
