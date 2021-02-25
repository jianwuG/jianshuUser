import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState=fromJS({
   bloggerInfo:{},
    tabIndex:null,
    wordList:[],
});
export default (state = defaultState,action)=>{
   switch (action.type) {
       case actionTypes.SET_BLOGGER_INFO:
           return state.set("bloggerInfo",action.info);
       case actionTypes.SET_TAB_INDEX:
           return state.set('tabIndex',action.index);
       case actionTypes.SET_WORD_LIST:
           return state.set('wordList',action.list);
       default:
           return state;
   }
}
