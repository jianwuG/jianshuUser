import {fromJS} from "immutable";
import * as actionTypes from './actionTypes'

const defaultState=fromJS({
   bloggerInfo:{}
});
export default (state = defaultState,action)=>{
   switch (action.type) {
       case actionTypes.SET_BLOGGER_INFO:
           return state.set("bloggerInfo",action.info);
       default:
           return state;
   }
}
