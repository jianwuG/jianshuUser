import React, {useRef,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory } from 'react-router-dom'
import logoIcon from '@assets/logo.png'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '@pages/login/store'
import {Row,Col,Space,Button} from 'antd'
import SearchDiv from "../searchDiv";
import style from './header.module.less'
import '@/index.less'

const Header = () => {
    const {isFocus, hasToken, searchList, defaultPageSize, isSearchEnter, historyList} = useSelector((state) => ({
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
    let dispatch = useDispatch();
    let history=useHistory();
    const inputFocus = () => {
        dispatch(actionCreators.searchFocus());
        searchList.size === 0 && dispatch(actionCreators.getSearchList(defaultPageSize))
    };
    const inputBlur = () => {
        dispatch(actionCreators.searchBlur())
    };
    const addHistoryList = (value) => {
        dispatch(actionCreators.addHistoryList(historyList.push(value)));
    };

    const logout = () => {
        dispatch(loginActionCreators.logout())
    };
    const goLoginPage=()=>{
        history.push('/login');
    };
    const onKeyDownDiv = (isEnter,historyList,e) => {
        if(isEnter&&e.keyCode === 13||!isEnter) {
            let value=inputRef.current.value;
            value&&addHistoryList(value,historyList);
            inputRef.current.value='';
        }
    };

    return (
        <>
          <Row className={style.headerDiv}>
              <Col span={4} >
                  <a href='/' className={style.headerLogo}>
                      <img alt="logo" src={logoIcon}/>
                  </a>
              </Col>
              <Col span={12} className={style.headerContent} xs={0} sm={0} md={0} lg={4} xl={12}>
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
                                 onKeyDown={(e)=>onKeyDownDiv(true,historyList,e)}
                                 ref={inputRef}
                          />
                          <div className={isFocus?style.iconSearch:''} onClick={(e)=>onKeyDownDiv(false,historyList,e)}>
                              <i className="iconfont iconsousuo" ></i>
                          </div>
                          {(isFocus || isSearchEnter) && <SearchDiv/>}
                      </div>
                  </CSSTransition>

              </Col>

              <Col span={8} xs={0} sm={0} md={0} lg={4} xl={8}>
              <Space Size={[8,16]}>
                  <a className={style.headerRightAa}>Aa</a>
                  {
                      !hasToken?<a  className={style.headerRightlogin} onClick={goLoginPage}>登录</a>:
                          <a  className={style.headerRightlogin} onClick={logout} >退出登录</a>
                  }
                  <button type='text' className={style.headerRightRegistered}>注册</button>
                  <button type='text' className={style.headerRightWrite}>写文章</button>
              </Space>
              </Col>
          </Row>
        </>
    )
};
export default Header;
