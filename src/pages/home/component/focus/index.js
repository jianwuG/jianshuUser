import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {actionCreators} from '@pages/home/store'
import FocusList from './../focusList'
import style from './index.module.less'


const Focus = () => {
    const {focusIndex} = useSelector(state => ({
        focusIndex: state.getIn(['home', 'focusIndex']),
    }));
    useEffect(()=>{
        getFansList();
    },[focusIndex])
    let dispatch = useDispatch();
    const setFocusIndex = (index) => {
        dispatch(actionCreators.setFocusIndex(index));
        getFansList();
    };
    const getFansList = () => {
        dispatch(actionCreators.getFans())
    };
    return (
        <>
            <div className={style.focusDiv}>
                <div className={focusIndex === 0 ? style.focusTabItemSelect : style.focusTabItem}
                     onClick={() => setFocusIndex(0)}>
                    <span>关注用户</span>
                </div>
                <div className={focusIndex === 1 ? style.focusTabItemSelect : style.focusTabItem}
                     onClick={() => setFocusIndex(1)}>
                    <span>粉丝</span>
                </div>
            </div>
            <div>
                <FocusList/>
            </div>
        </>
    )
};
export default Focus;
