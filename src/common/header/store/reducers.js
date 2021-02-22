import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState=fromJS ({
    isFocus:false,
    isSearchEnter:false,
    searchList:[],
    pageNum:1,
    totalPageNum:1,
    defaultPageSize:10,
});
export default (state = defaultState,action)=>{
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("isFocus",true);
        case actionTypes.SEARCH_BLUR:
            return state.set("isFocus",false);
            case actionTypes.SEARCH_ENTER:
            return state.set("isSearchEnter",true);
        case actionTypes.SEARCH_LEVER:
            return state.set("isSearchEnter",false);

        case actionTypes.SET_SEARCH_LIST:
            return state.merge({
                searchList:action.data,
                totalPageNum:action.totalPageNum
            });
        case actionTypes.CHANGE_LIST:
            return state.set("pageNum",action.pageNum)
        default:
            return state

    }

}
