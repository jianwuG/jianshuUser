import React, {useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from '@common/header/header.module.less'
import logoIcon from '@assets/logo.png'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '@pages/login/store'
import {Link} from 'react-router-dom';
import {Row,Col,Space,Button} from 'antd'

import '@/index.less'

const Header = () => {
    const {isFocus, hasToken, searchList, defaultPageSize, pageNum, totalPageNum, isSearchEnter, historyList} = useSelector((state) => ({
        isFocus: state.getIn(['header', 'isFocus']),
        hasToken: state.getIn(['login', 'hasToken']),
        searchList: state.getIn(['header', 'searchList']),
        defaultPageSize: state.getIn(['header', 'defaultPageSize']),
        pageNum: state.getIn(['header', 'pageNum']),
        totalPageNum: state.getIn(['header', 'totalPageNum']),
        isSearchEnter: state.getIn(['header', 'isSearchEnter']),
        historyList: state.getIn(['header', 'historyList'])
    }));
    const inputRef=useRef();
    const dispatch = useDispatch();
    const inputFocus = () => {
        dispatch(actionCreators.searchFocus());
        searchList.size === 0 && dispatch(actionCreators.getSearchList(defaultPageSize))
    };
    const inputBlur = () => {
        dispatch(actionCreators.searchBlur())
    };
    const handleMouseEnter = () => {
        dispatch(actionCreators.searchEnter())
    };
    const handleMouseLeave = () => {
        dispatch(actionCreators.searchLever())
    };
    const changeFocusList = () => {
        let num = pageNum < totalPageNum ? pageNum + 1 : 1;
        dispatch(actionCreators.changeList(num))
    };

    const addHistoryList = (value) => {
        dispatch(actionCreators.addHistoryList(historyList.push(value)));
    };
    const clearHistoryList = () => {
        dispatch(actionCreators.clearHistoryList())
    };
    const logout = () => {
        dispatch(loginActionCreators.logout())
    };
    const onKeyDownDiv = async (isEnter,historyList,e) => {
        if(isEnter&&e.keyCode === 13||!isEnter) {
            let value=inputRef.current.value;
            value&&addHistoryList(value,historyList);
            inputRef.current.value='';
        }
    };

    const getSearchDIvList=()=>{

        const list = searchList.toJS().slice((pageNum - 1) * defaultPageSize, pageNum * defaultPageSize);
        const hList=historyList.toJS();
        return (
            <div className={style.searchDiv}>
                {
                    hList.length>0&&
                    <div className={style.searchHistoryDiv}>
                        <div className={style.searchDel} onClick={clearHistoryList}>清空</div>
                        <div className={style.searchHistory}>
                            {
                                hList.map(item=>(
                                    <span key={item}>
                                {item}
                            </span>
                                ))
                            }
                        </div>
                    </div>
                }
                <div className={style.searchAdvice}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    <div className={style.searchChange} onClick={() => changeFocusList(pageNum, totalPageNum)}>切换</div>
                    <div className={style.searchList}>
                        {
                            list.map(item => (
                                <span key={item.id}>
                           {item.name}
                       </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    };


    return (
        <>
          <Row className={style.headerDiv}>
              <Col span={2} >
                  <a href='/' className={style.headerLogo}>
                      <img alt="logo" src={logoIcon}/>
                  </a>
              </Col>
              {/*<Col span={8} xs={0} sm={0} md={0} lg={4} xl={6}  className={style.headerContent}>*/}
              <Col span={16} className={style.headerContent}>
                  {
                      !hasToken ? (
                          <Space size={[8,16]}>
                              <Button type='text' >首页</Button>
                              <Button type='text'>下载app</Button>
                          </Space>
                      ) : (
                          <Space size={[8,16]}>
                              <Button type='text' >发现</Button>
                              <Button type='text'>关注</Button>
                              <Button type='text'>消息</Button>
                          </Space>
                      )
                  }
                  <CSSTransition
                      in={isFocus}
                      timeout={1000}
                      classNames="fade"
                  >
                      <div className={isFocus ? "headerSearch focusInput" : 'headerSearch noFocusInput'}>
                          <input type="text" name="q" id="q"
                                 autoComplete="off"
                                 placeholder="搜索"
                                 className={style.inputDefalut}
                                 onBlur={inputBlur}
                                 onFocus={() => inputFocus(searchList, defaultPageSize)}
                                 onKeyDown={(e)=>this.onKeyDownDiv(true,historyList,e)}
                                 ref={inputRef}
                          />
                          <div className={isFocus?style.iconSearch:''} onClick={(e)=>this.onKeyDownDiv(false,historyList,e)}>
                              <i className="iconfont iconsousuo" ></i>
                          </div>
                          {(isFocus || isSearchEnter) && this.getSearchList()}
                      </div>
                  </CSSTransition>

              </Col>

              <Col span={6} >
              {/*<Col span={6}  xs={0} sm={0} md={0} lg={4} xl={6}>*/}
              <Space Size={[8,16]}>
                  <a className={style.headerRightAa}>Aa</a>
                  {
                      !hasToken?<Link to='/login'><a  className={style.headerRightlogin} >登录</a></Link>:
                          <a  className={style.headerRightlogin} onClick={logout} >退出登录</a>
                  }
                  <button type='text' className={style.headerRightRegistered}>注册</button>
                  <button type='text' className={style.headerRightWrite}>
                      写文章
                  </button>
              </Space>
              </Col>
          </Row>
        </>
    )
};
export default Header;
