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
export const searchEnter=()=>{
    return{
        type:actionTypes.SEARCH_ENTER
    }
};
export const searchLever=()=>{
    return{
        type:actionTypes.SEARCH_LEVER
    }
};
export const getSearchList=(defaultPageSize)=>{
  return (dispath)=>{
      axios.get('/api/getSearchList').then((res)=>{
          dispath(setSearchList(res.data.data,defaultPageSize));
          console.log('1111111111',res.data.data);
      }).catch((err)=>{
          console.log(err);
      })
  }
};
export const changeList=(num)=>{
    console.log('11111111111111',num);
  return{
      type:actionTypes.CHANGE_LIST,
      pageNum:num
  }
};

 const setSearchList=(data,defaultPageSize)=>{
    return{
        type:actionTypes.SET_SEARCH_LIST,
        data:fromJS(data),
        totalPageNum:Math.ceil(data.length/defaultPageSize)
    }
};
