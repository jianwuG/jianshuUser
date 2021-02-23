import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import style from '@common/header/header.module.less'
import logoIcon from '@assets/logo.png'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';

import '@/index.less'


class Header extends PureComponent {

    render() {
        const {
            isFocus, hasToken, defaultPageSize,historyList,
            searchList, inputFocus, inputBlur, isSearchEnter
        } = this.props;
        return (
            <>
                <div className={style.headerDiv}>
                    <div className={style.headerLeft}>
                        <a href='/' className={style.headerLogo}>
                            <img alt="logo" src={logoIcon}/>
                        </a>

                        <div className={style.headerContext}>
                            {
                                !hasToken ? (
                                    <>
                                        <span>首页</span>
                                        <span>下载app</span>
                                    </>
                                ) : (
                                    <>
                                        <span>发现</span>
                                        <span>关注</span>
                                        <span>消息</span>
                                    </>
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
                                           ref={(input)=>{this.inputRef=input}}
                                    />
                                    <div className={isFocus?style.iconSearch:''} onClick={(e)=>this.onKeyDownDiv(false,historyList,e)}>
                                        <i className="iconfont iconsousuo" ></i>
                                    </div>
                                    {(isFocus || isSearchEnter) && this.getSearchList()}
                                </div>
                            </CSSTransition>

                        </div>
                    </div>

                    <div className={style.headerRight}>
                        <span className={style.headerRightAa}>Aa</span>
                        <a className={style.headerRightlogin}>登录</a>
                        <a className={style.headerRightRegistered}>注册</a>
                        <a className={style.headerRightWrite}>
                            <span className="iconfont iconyumaobi"></span>
                            写文章
                        </a>
                    </div>

                </div>
            </>
        )
    };

    getSearchList() {
        const {
            searchList, pageNum, defaultPageSize, totalPageNum,historyList,
            handleMouseEnter, handleMouseLeave, changeFocusList,clearHistoryList
        } = this.props;
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

    onKeyDownDiv = async (isEnter,historyList,e) => {
        if(isEnter&&e.keyCode === 13||!isEnter) {
           this.inputRef.value&&this.props.addHistoryList(this.inputRef.value,historyList);
            this.inputRef.value='';
        }
    }

}

const mapStateToProps = (state) => {
    return {
        isFocus: state.getIn(['header', 'isFocus']),
        hasToken: state.getIn(['login', 'hasToken']),
        searchList: state.getIn(['header', 'searchList']),
        defaultPageSize: state.getIn(['header', 'defaultPageSize']),
        pageNum: state.getIn(['header', 'pageNum']),
        totalPageNum: state.getIn(['header', 'totalPageNum']),
        isSearchEnter: state.getIn(['header', 'isSearchEnter']),
        historyList:state.getIn(['header','historyList'])
    }
};
const mapDisPathToProps = (dispath) => {
    return {
        inputFocus(searchList, defaultPageSize) {
            dispath(actionCreators.searchFocus());
            searchList.size === 0 && dispath(actionCreators.getSearchList(defaultPageSize))
        },
        inputBlur() {
            dispath(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispath(actionCreators.searchEnter())

        },
        handleMouseLeave() {
            dispath(actionCreators.searchLever())

        },
        changeFocusList(pageNum, totalPageNum) {
            let num = pageNum < totalPageNum ? pageNum + 1 : 1;
            dispath(actionCreators.changeList(num))
        },
        addHistoryList(value,historyList){
            dispath(actionCreators.addHistoryList(historyList.push(value)));
        },
        clearHistoryList(){
            dispath(actionCreators.clearHistoryList())
        }
    }
};

export default connect(mapStateToProps, mapDisPathToProps)(Header);
