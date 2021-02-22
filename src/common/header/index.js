import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import style from '@common/header/header.module.less'
import logoIcon from '@assets/logo.png'
import {CSSTransition} from 'react-transition-group'
import { actionCreators } from './store';

import '@/index.less'


class Header extends PureComponent {

    render() {
        const {isFocus,hasToken,defaultPageSize,
            searchList, inputFocus,inputBlur,isSearchEnter}=this.props;
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
                                    <div className={isFocus?"headerSearch focusInput":'headerSearch noFocusInput'}>
                                        <input type="text" name="q" id="q" value="" autoComplete="off" placeholder="搜索"
                                               className={style.inputDefalut}
                                               onBlur={inputBlur}
                                               onFocus={()=>inputFocus(searchList,defaultPageSize)}
                                        />
                                        <i className="iconfont iconsousuo"></i>
                                        {(isFocus||isSearchEnter)&&this.getSearchList()}
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
    getSearchList(){
        const {searchList,pageNum,defaultPageSize,totalPageNum,
            handleMouseEnter,handleMouseLeave,changeFocusList}=this.props;
        const list=searchList.toJS().slice((pageNum-1)*defaultPageSize,pageNum*defaultPageSize);
        return(
           <div className={style.searchDiv}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
           >
               <div className={style.searchChange} onClick={()=>changeFocusList(pageNum,totalPageNum)}>切换</div>
               <div className={style.searchList}>
                   {
                       list.map(item=>(
                           <span key={item.id}>
                           {item.name}
                       </span>
                       ))
                   }
               </div>
           </div>
       )
    };
    clickSearchDiv=async()=>{

    }

}

const mapStateToProps=(state)=>{
  return{
      isFocus: state.getIn(['header', 'isFocus']),
      hasToken:state.getIn(['login', 'hasToken']),
      searchList:state.getIn(['header', 'searchList']),
      defaultPageSize:state.getIn(['header', 'defaultPageSize']),
      pageNum:state.getIn(['header', 'pageNum']),
      totalPageNum:state.getIn(['header', 'totalPageNum']),
      isSearchEnter:state.getIn(['header', 'isSearchEnter']),
  }
};
const mapDisPathToProps=(dispath)=>{
   return{
       inputFocus(searchList,defaultPageSize){
           dispath(actionCreators.searchFocus());
           searchList.size===0&&dispath(actionCreators.getSearchList(defaultPageSize))
       },
       inputBlur(){
           dispath(actionCreators.searchBlur())
       },
       handleMouseEnter(){
           dispath(actionCreators.searchEnter())

       },
       handleMouseLeave(){
           dispath(actionCreators.searchLever())

       },
       changeFocusList(pageNum,totalPageNum){
           let num=pageNum<totalPageNum?pageNum+1:1;
           dispath(actionCreators.changeList(num))
       }
   }
};

export default connect(mapStateToProps,mapDisPathToProps)(Header);
