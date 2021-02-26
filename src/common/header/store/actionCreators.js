import * as actionTypes from './actionTypes';
import axios from 'axios'
import {fromJS} from 'immutable'

//搜索获取焦点
export const searchFocus=()=>{
    return{
        type:actionTypes.SEARCH_FOCUS
    }
};
//搜索失去焦点
export const searchBlur=()=>{
    return{
        type:actionTypes.SEARCH_BLUR
    }
};
//搜索建议框进入
export const searchEnter=()=>{
    return{
        type:actionTypes.SEARCH_ENTER
    }
};
//搜索建议框移除
export const searchLever=()=>{
    return{
        type:actionTypes.SEARCH_LEVER
    }
};
//获取搜索建议list
export const getSearchList=(defaultPageSize)=>{
  return (dispath)=>{
      axios.get('/api/getSearchList').then((res)=>{
          dispath(setSearchList(res.data.data,defaultPageSize));
      }).catch((err)=>{
          console.log(err);
      })
  }
};
//切换搜索建议list
export const changeList=(num)=>{
  return{
      type:actionTypes.CHANGE_LIST,
      pageNum:num
  }
};

//添加搜索历史记录
export const addHistoryList=(list)=>{
  return{
      type:actionTypes.ADD_HISTORY_LIST,
      list:fromJS(list)
  }
};

// 清空搜索历史记录
export const clearHistoryList=()=>{
    return{
        type:actionTypes.CLEAR_HISTORY_LIST
    }
};

const setSearchList=(data,defaultPageSize)=>{
    return{
        type:actionTypes.SET_SEARCH_LIST,
        data:fromJS(data),
        totalPageNum:Math.ceil(data.length/defaultPageSize)
    }
};
