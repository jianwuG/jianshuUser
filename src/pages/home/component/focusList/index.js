import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import style from './index.module.less'

const FocusList = () => {
    const {focusIndex, fansInfo} = useSelector(state => ({
        focusIndex: state.getIn(['home', 'focusIndex']),
        fansInfo: state.getIn(['home', 'fansInfo']),
    }));
    const [list,setList]=useState([]);
    useEffect(()=>{
        const info = fansInfo.toJS();
        const _list = focusIndex === 0 ? info.fansList : info.lookList;
        setList(_list);
    },[fansInfo,focusIndex]);
    const goMan=()=>{
        window.location.reload();
    }
    return (
        <>
            {
                list && list.map(item => (
                        <div className={style.manItem} key={item.id} onClick={goMan}>
                            {item.name}
                        </div>
                    )
                )
            }
        </>
    )
};

export default FocusList;


