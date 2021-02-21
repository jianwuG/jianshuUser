import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'

const defaultState=fromJS ({
    isFocus:false,
    searchList:[],
    pageNum:0,
    totalPageNum:0,
});
export default (state = defaultState,action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("isFocus",true);
        case actionTypes.SEARCH_BLUR:
            return state.set("isFocus",false);
        case actionTypes.SET_SEARCH_LIST:
            return state.set("searchList",action.data)
        default:
            return state

    }

}