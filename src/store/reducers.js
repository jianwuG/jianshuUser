const defaultState={
    isFocus:false,
};

export default (state = defaultState,auction)=>{
    if(auction.type==='search_focus'){
      return{
          isFocus:true
      }
    }
    else if(auction.type==='search_blur'){
        return{
            isFocus:false
        }
    }
  return state
}