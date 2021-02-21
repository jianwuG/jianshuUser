import * as actionTypes from './actionTypes';

const defaultState={
    isFocus:false,
};

export default (state = defaultState,auction)=>{
    if(auction.type===actionTypes.SEARCH_FOCUS){
        return{
            isFocus:true
        }
    }
    else if(auction.type===actionTypes.SEARCH_BLUR){
        return{
            isFocus:false
        }
    }
    return state
}