import * as actionType from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

export const getBloggerInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/getBloggerInfo').then(res=>{
            dispatch(setBloggerInfo(res.data.data));
        }).catch(err=>{
            console.log('getBloggerInfo err',err);
        })
    }
};

const setBloggerInfo=(info)=>{
    return{
        type:actionType.SET_BLOGGER_INFO,
        info:fromJS(info)
    }
}
