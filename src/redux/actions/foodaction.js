import {FOOD_LOADED,FOOD_UPLOAD,FOOD_UPLOAD_FAIL,CLEAR_ERRORS,FOOD_LOADING, FOOD_LOAD_FAIL, FOOD_UPDATE} from  "../actiontypes";
import axios from "axios";
import {url} from '../baseurl';
import {getErrors} from './actioncreators'
export const Addfood= (formdata) => async (dispatch) => {
    
        const config = {
            headers:{ "Content-type":"multipart/formdata" }
        }
        const data = formdata
        await axios.post(`${url}/studentscorner/food`,data,config)
            .then(res =>{
                console.log(res.data);
                dispatch({
                    type:FOOD_UPLOAD,
                    payload:res.data
                });
                dispatch({
                    type:CLEAR_ERRORS
                });
            })

            .catch(err => {
                dispatch(getErrors(err.response.data,err.response.status,'FOOD_UPLOAD_FAIL'))
                console.log(err);
                dispatch({
                    type:FOOD_UPLOAD_FAIL
                })
            })
    
}

export const Getfood = () => (dispatch) =>{
    dispatch({type:FOOD_LOADING});
    axios.get(`${url}/admin/food`)
    .then(res =>{
        dispatch({
            type:FOOD_LOADED,
            payload:res.data
        })
    })
    .catch(err => {
        dispatch(getErrors(err.response.data,err.response.status,'FOOD_LOAD_FAIL'));
        dispatch({
            type:FOOD_LOAD_FAIL
        })
    })
}

export const Resolvefood = () => (dispatch) => {
    axios.put(`${url}/admin/food`)
    .then(res => {
        dispatch({
            type:FOOD_UPDATE,
            payload:res.data
        })
        dispatch({
            type:CLEAR_ERRORS
        })
    })
}