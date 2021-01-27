import {FOOD_LOADED,FOOD_LOADING,FOOD_UPLOAD,FOOD_LOAD_FAIL, FOOD_UPDATE, FOOD_UPDATE_FAIL,LOGOUT_SUCCESS} from '../actiontypes'

const intialstate = {
    complaints:[],
    isLoading:false
}

export const food = (state = intialstate,action) => {
    switch(action.type){
        case FOOD_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case FOOD_UPLOAD:
            return{
                ...state,
                complaints:action.payload,
                isLoading:false,
               
            }
        case FOOD_LOADED:
            return{
                isLoading:false,
                complaints:action.payload
            }
        case FOOD_LOAD_FAIL:
            return{
                ...state,
                isLoading:false,
                complaints:[]
            }
        case FOOD_UPDATE:
            return{
                ...state,
                isLoading:false,
               
            }
        case FOOD_UPDATE_FAIL:
            return{
                ...state,
                isLoading:false,
                
            }
        case LOGOUT_SUCCESS:
            return{
                isloading:false,
                complaints:[]
            }
        default:
            return {...state}
    }
} 