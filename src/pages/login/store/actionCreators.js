import * as actionTypes from './actionTypes';
import axios from 'axios'


export const goLogin = () => {
    return (dispath) => {
        axios.post('/api/login').then(
            res => {
                res.data.status===200&&dispath(setToken(true))
            }
        ).catch(err => {
            console.log(err);
        })
    }
};
export const logout=()=>{
    return {
      type:actionTypes.LOGOUT
    }
};
const setToken=(hasToken)=>{
    return{
        type:actionTypes.SETLOGIN,
        hasToken
    }
}
