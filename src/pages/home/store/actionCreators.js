import * as actionType from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

export const getBloggerInfo=()=>{
    return (dispath)=>{
        axios.get('/api/getBloggerInfo').then(res=>{
            dispath(setBloggerInfo(res.data.data));
        }).catch(err=>{
            console.log('getBloggerInfo err',err);
        })
    }
};
export const setTabIndex=(index)=>{
    return{
        type:actionType.SET_TAB_INDEX,
        index
    }
};
export const getWordList=(option)=>{
   return (dispath)=>{
       axios.get(`/api/getWordList`).then(res=>{
           dispath(setWordList(res.data.data));
       }).catch(err=>{
           console.log('getWordList err',err);
       });
   }
};
export const setShowFocus=(isShow,index)=>{
    return{
        type:actionType.SET_SHOW_FOCUS,
        isShow
    }
};

export const setFocusIndex=(index)=>{
    return{
        type:actionType.SET_FOCUS_INDEX,
        index
    }
};
export const getFans=()=>{
    console.log('--------------');
  return (dispath)=>{
      axios.get('/api/getFans').then(res=>{
          console.log('res',res.data.listInfo);
          dispath(setFansList(res.data.listInfo));
      }).catch(err=>{
          console.error(err)
      })
  }
};

const setFansList=(info)=>{
    return{
        type:actionType.SET_FANS_LIST,
        info:fromJS(info)
    }
}

const setWordList=(list)=>{
    return{
        type:actionType.SET_WORD_LIST,
        list:fromJS(list)
    }
};

const setBloggerInfo=(info)=>{
    return{
        type:actionType.SET_BLOGGER_INFO,
        info:fromJS(info)
    }
};

