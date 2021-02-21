import * as actionTypes from './actionTypes';
import axios from 'axios'

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
           console.log('11111111111',res);
      }).catch((err)=>{
          console.log(err);
      })
  }
};