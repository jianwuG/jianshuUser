import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import style from '@common/header/header.module.less'
import logoIcon from '@assets/logo.png'
import {CSSTransition} from 'react-transition-group'
import { actionCreators } from './store';

import '@/index.less'

class Header extends PureComponent {

    render() {
        console.log('111111', logoIcon);
        const {isFocus,hasToken}=this.props;
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
                                           onBlur={this.props.inputBlur}
                                           onFocus={this.props.inputFocus}
                                    />
                                    <i className="iconfont iconsousuo"></i>
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
}
const mapStateToProps=(state)=>{
  return{
      isFocus: state.header.isFocus,
      hasToken:state.login.hasToken
  }
};
const mapDisPathToProps=(dispath)=>{
   return{
       inputFocus(){
           dispath(actionCreators.searchFocus())
           dispath(actionCreators.getSearchList())
       },
       inputBlur(){
           dispath(actionCreators.searchBlur())
       }
   }
};

export default connect(mapStateToProps,mapDisPathToProps)(Header);
