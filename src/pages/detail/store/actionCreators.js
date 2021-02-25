import * as actionType from './actionTypes'
import axios from 'axios'
import {fromJS} from "immutable";

export const getDetailInfo=()=>{
    return (dispath)=>{
        axios.get('/api/getDetailInfo').then(res=>{
            console.log('获取文章详情失败22',res.data.data);
            dispath(setDetailInfo(res.data.data))
        }).catch(err=>{
            console.log('获取文章详情失败',err);
        })
    }
}

const setDetailInfo=(info)=>{
    return{
        type:actionType.SETDRTAIINFO,
        info:fromJS(info)
    }
}
