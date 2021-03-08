import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionCreators} from "../header/store";
import {Space, Button} from 'antd'
import style from './searchDiv.module.less'

const SearchDiv = () => {
    const {searchList, historyList, pageNum, totalPageNum, defaultPageSize} = useSelector(state => ({
        searchList: state.getIn(['header', 'searchList']),
        historyList: state.getIn(['header', 'historyList']),
        pageNum: state.getIn(['header', 'pageNum']),
        totalPageNum: state.getIn(['header', 'totalPageNum']),
        defaultPageSize: state.getIn(['header', 'defaultPageSize']),

    }));
    let dispatch = useDispatch();
    const handleMouseEnter = () => {
        dispatch(actionCreators.searchEnter())
    };
    const clearHistoryList = () => {
        dispatch(actionCreators.clearHistoryList())
    };
    const handleMouseLeave = () => {
        dispatch(actionCreators.searchLever())
    };
    const changeFocusList = () => {
        let num = pageNum < totalPageNum ? pageNum + 1 : 1;
        dispatch(actionCreators.changeList(num))
    };

    let list = searchList.toJS().slice((pageNum - 1) * defaultPageSize, pageNum * defaultPageSize);
    let hList = historyList.toJS();
    return (
        <>
            <div className={style.searchDiv}>
                {
                    hList.length > 0 &&
                    <div className={style.searchHistoryDiv}>
                        <Button type='text' className={style.searchDel} onClick={clearHistoryList}>清空</Button>
                        <Space size={[2, 6]} wrap className={style.searchHistory}>
                            {
                                hList.map(item => (
                                    <span key={item}>
                                {item}
                                  </span>
                                ))
                            }
                        </Space>
                    </div>
                }
                <div className={style.searchAdvice}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >

                    <Button type='text' className={style.searchChange} onClick={() => changeFocusList(pageNum, totalPageNum)}>切换</Button>
                    <Space size={[2, 6]} wrap className={style.searchList}>
                        {
                            list.map(item => (
                                <span key={item.id}>
                           {item.name}
                       </span>
                            ))
                        }
                    </Space>
                </div>
            </div>
        </>
    )
}

export default SearchDiv;

