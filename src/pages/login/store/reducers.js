import {fromJS} from 'immutable'
import * as actionTypes from "./actionTypes";
const defaultState=fromJS({
    hasToken:false,
});

export default (state = defaultState,action)=>{
    switch (action.type) {
        case actionTypes.SETLOGIN:
            return state.set('hasToken',action.hasToken);
        case actionTypes.LOGOUT:
            return state.set('hasToken',false)
        default:
            return state
    }
}
