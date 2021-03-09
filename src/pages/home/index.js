import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from '@common/header';
import {Row, Col, Avatar, Button, Space,Divider} from 'antd'
import WordTab from './component/wordTab'
import Focus from './component/focus'
import {actionCreators} from './store';
import style from './home.module.less'

const Home = () => {
    const {bloggerInfo, showFocus} = useSelector(state => ({
        bloggerInfo: state.getIn(['home', 'bloggerInfo']),
        showFocus: state.getIn(['home', 'showFocus'])
    }));
    let [bloggerObj, setBlogger] = useState({});
    useEffect(() => {
        dispatch(actionCreators.getBloggerInfo())
    }, [])
    useEffect(() => {
        setBlogger(bloggerInfo.toJS())
    }, [bloggerInfo]);
    let dispatch = useDispatch();

    const setShowFocus = (isShow, index) => {
        let _isShow;
        if (index === 1 || index === 0) {
            _isShow = true;
        } else if (index === 2) {
            _isShow = false;
        }

        (index === 1 || index === 2 || index === 0) &&
        dispatch(actionCreators.setShowFocus(_isShow)) &&
        dispatch(actionCreators.setFocusIndex(index)) &&
        dispatch(actionCreators.getFans());
    };
    const getProject = (text, projectInfo) => {
        return (
            <div className={style.projectDiv}>
                <Divider>{text}</Divider>
                {
                    projectInfo && projectInfo.map(item => (
                        <div key={item.id} className={style.projectItem}>
                            <img src={item.icon} alt=''/>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        )
    };
    const {name, gender, numInfo, corpus, createProject, managementProject} = bloggerObj;
    return (
        <div>
            <Header></Header>
            <Row justify='center' className={style.homeContent}>
                <Col span={10} gutter={{xs:2,sm:4,md:6,lg:10}}>
                    <Row wrap='false'>
                        <Col span={4} sm={0} md={4}>
                            <Avatar src={bloggerObj.url} size={80}/>
                        </Col>
                        <Col span={12} className={style.userName} xs={6} sm={8} md={10} lg={12} >
                            <span>{name}</span>
                            <i className={gender ? 'iconnan iconfont' : 'iconnv iconfont'}></i>
                            <div>
                                {
                                    numInfo && (
                                        <div className={style.numInfoDiv}>
                                            {
                                                numInfo.map((item, index) => (
                                                    <div className={style.numInfoDivItm} key={item.id}
                                                         onClick={() => setShowFocus(true, index)}>
                                                        <span>{item.text}</span>
                                                        <span>{item.num}
                                                            {
                                                                item.canClick && <i> ></i>
                                                            }
                                                      </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )

                                }
                            </div>
                        </Col>

                        <Col span={6} className={style.userInfoBtn} sm={0}  md={6}>
                            <Space>
                                <Button type='primary' className={style.btnSend}>发简信</Button>
                                <Button type='ghost' className={style.btnAdd}>+关注</Button>
                            </Space>
                        </Col>
                    </Row>
                    {
                        showFocus ? <Focus></Focus> : <WordTab></WordTab>
                    }
                </Col>
                <Col span={4}  xs={0} md={0} lg={4} push={1}>
                    <div className={style.contentRight}>
                        {
                            getProject("他创建的专题", createProject)
                        }
                        {
                            getProject('他管理的专题', managementProject)
                        }
                        <div className={style.corpusDiv}>
                            <Divider>他的文集</Divider>
                            {
                                corpus && corpus.map(item => (
                                    <div className={style.corpusItem}>
                                        <i className='iconfont iconsvgwrite'></i>
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
};

export default Home;

