import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState=fromJS({
    bloggerInfo:{},
    tabIndex:null,
    wordList:[],
    showFocus:false,
    focusIndex:null,
    fansInfo:{},
});
export default (state = defaultState,action)=>{
   switch (action.type) {
       case actionTypes.SET_BLOGGER_INFO:
           return state.set("bloggerInfo",action.info);
       case actionTypes.SET_TAB_INDEX:
           return state.set('tabIndex',action.index);
       case actionTypes.SET_WORD_LIST:
           return state.set('wordList',action.list);
       case actionTypes.SET_SHOW_FOCUS:
           return state.set('showFocus',action.isShow)
       case actionTypes.SET_FOCUS_INDEX:
           return state.set('focusIndex',action.index)
       case actionTypes.SET_FANS_LIST:
           return state.set('fansInfo',action.info)
       default:
           return state;
   }
}
