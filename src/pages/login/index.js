import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import style from '@pages/login/login.module.less'
import * as actionCreators from './store/actionCreators'


class Login extends PureComponent {
    render() {
        const {goLogin,hasToken}=this.props;
        if(hasToken){
             return   <Redirect to='/'/>
        }
        else{
          return (
              <div className={style.login_div}>
                  <div className={style.main}>
                      <span>登录</span>
                      <div className={style.input}>
                          <input type='text'placeholder='手机号或者邮箱'/>
                          <input type='password' placeholder='密码'/>
                      </div>
                      <div className={style.btn} onClick={goLogin}>登录</div>
                  </div>
              </div>
          )
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        hasToken:state.getIn(['login','hasToken'])
    }
};
const mapDispatchToProps=(dispath)=>{
    return{
        goLogin(){
            dispath(actionCreators.goLogin())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);
