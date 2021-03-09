import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Header from '@common/header';
import {actionCreators} from './store'
import {Image} from 'antd'
import style from './detail.module.less'

const Detail = () => {
    const {detailInfo} = useSelector(state => ({
        detailInfo: state.getIn(['detail', 'detailInfo'])
    }));
    let dispatch = useDispatch();
    const [info, setInfo] = useState({});
    useEffect(() => {
        dispatch(actionCreators.getDetailInfo())
    }, []);
    useEffect(() => {
        setInfo(detailInfo.toJS());
    }, [detailInfo]);

    return (
        <>
            <Header></Header>
            <div className={style.detail}>
                <div className={style.detailContext}>
                    <div className={style.contextTitle}>
                        <h1 className={style.title}>{info.title}</h1>
                        <div className={style.contextBlogger}>
                            <img src={info.img} alt=""/>
                            <div className={style.contextBloggerInfo}>
                                <span>{info.name}</span>
                                <span>{info.date}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.contextDiv}>
                        {
                            info.isShowUrl && <Image src={info.wordUrl} alt=''/>
                        }
                        <span> {info.word}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;
