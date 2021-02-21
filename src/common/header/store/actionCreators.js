import * as actionTypes from './actionTypes';
import axios from 'axios'
import {fromJS} from 'immutable'

export const searchFocus=()=>{
    return{
        type:actionTypes.SEARCH_FOCUS
    }
};
export const searchBlur=()=>{
    return{
        type:actionTypes.SEARCH_BLUR
    }
};
export const getSearchList=()=>{
  return (dispath)=>{
      axios.get('/api/getSearchList').then((res)=>{
          dispath(setSearchList(res.data.data));
          console.log('1111111111',res.data.data);
      }).catch((err)=>{
          console.log(err);
      })
  }
};

export const setSearchList=(data)=>{
    return{
        type:actionTypes.SET_SEARCH_LIST,
        data:fromJS(data),
    }
}