import {fromJS} from "immutable";
import * as actionType from './actionTypes'
const defaultState=fromJS({
    detailInfo:{}
});


export default (state = defaultState,action)=>{
    switch (action.type) {
        case actionType.SETDRTAIINFO:
            return state.set('detailInfo',action.info)
        default:
            return state;
    }
}
